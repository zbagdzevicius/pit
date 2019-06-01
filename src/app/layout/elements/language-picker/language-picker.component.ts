import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  @Select(LangState.getLanguage) language$: Observable<string>;
  currentFlagSrouce: string;
  flagSources: string[];

  constructor() {
    this.language$
      .subscribe(language => {
        this.currentFlagSrouce = `assets/images/flags/${language}.png`;
        this.getFlags(language);
      });
  }

  getFlags(language) {
    const flags = ['de', 'en', 'lt', 'ru', 'ua'];
    const flagSources = [];
    for (const flag of flags) {
      if (flag !== language) {
        flagSources.push(`assets/images/flags/${flag}.png`);
      }
    }
    this.flagSources = flagSources;
  }

  ngOnInit() {
  }

}
