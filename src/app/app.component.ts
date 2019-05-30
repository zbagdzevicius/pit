import { Component } from '@angular/core';
import { LangState } from './core/state/lang.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ContentService } from './core/services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pit';

  @Select(LangState.getLanguage) language$: Observable<string>;

  constructor(
    private contentService: ContentService
  ) {
    this.language$
      .subscribe(language => {
        if (language) {
          this.contentService.getContent(language);
        }
      });
  }
}
