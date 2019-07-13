import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentModel } from '../models/translate/content.model';
import { SetContent, SetPolicyPopup } from '../actions/lang.actions';
import { Store } from '@ngxs/store';
import { PolicyPopup } from '../models/popup/policy-popup.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient, private store: Store) {
  }

  getContent(language: string) {
    this.http
      .get(`assets/${language}.json`)
      .subscribe((content: ContentModel) => {
        this.store.dispatch(new SetContent(content));
      },
        error => console.log('there is no file with this name')
      );

    this.http
      .get(`assets/${language}_policy_popup.json`)
      .subscribe((policyPopup: PolicyPopup) => {
        this.store.dispatch(new SetPolicyPopup(policyPopup));
      },
        error => console.log('there is no file with this name')
      );
  }
}
