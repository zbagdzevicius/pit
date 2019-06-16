import { Component, Inject } from '@angular/core';
import { LangState } from './core/state/lang.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ContentService } from './core/services/content.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pit';

  @Select(LangState.getLanguage) language$: Observable<string>;
  @Select(LangState.getContactButton) contactHero$: Observable<string>;
  lastHero: string;

  // showLoading = true;

  constructor(
    private contentService: ContentService
  ) {
    this.language$
      .subscribe(language => {
        if (language) {
          this.contentService.getContent(language);
        }
      });
    this.contactHero$
      .subscribe(lastHero => this.lastHero = lastHero);

      // setInterval(() => {
      //   this.showLoading = false;
      // }, 7000);
  }
}
