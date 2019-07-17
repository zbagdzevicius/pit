import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { ContentService } from 'src/app/core/services/content.service';
import { SetLanguage } from 'src/app/core/actions/lang.actions';
import { ContentModel } from 'src/app/core/models/translate/content.model';
import { PolicyRoot } from 'src/app/core/models/policy/policy-root.model';
import { ImpressRoot } from 'src/app/core/models/impress/impress-root.model';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  @Select(LangState.getLanguage) language$: Observable<string>;
  currentFlagSource: string;
  flagSources: string[];
  flags = [
    { 'source': null, 'name': 'de' },
    { 'source': null, 'name': 'en' },
    { 'source': null, 'name': 'lt' },
    { 'source': null, 'name': 'ru' },
    { 'source': null, 'name': 'ua' }
  ];

  constructor(private store: Store) {
    this.language$
      .subscribe(language => {
        this.currentFlagSource = `assets/images/flags/${language}.png`;
        this.getFlags(language);
      });
  }

  getFlags(language) {
    this.currentFlagSource = `assets/images/flags/${language}.png`;
    for (const flag of this.flags) {
      flag.source = `assets/images/flags/${flag.name}.png`;
    }
  }

  ngOnInit() {
  }

  changeFlag(flag) {
    this.currentFlagSource = flag.source;
    this.store.dispatch(new SetLanguage({
      language: flag.name,
      content: new ContentModel(),
      policyRoot: new PolicyRoot(),
      impressRoot: new ImpressRoot(),
      webmasterRoot: null,
      activeCard: null,
      device: {isMobile: false},
      animation: {animationShowed: true}
    }));
  }

}
