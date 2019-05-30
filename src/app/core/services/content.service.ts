import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentModel } from '../models/translate/content.model';
import { SetContent } from '../actions/lang.actions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient, private store: Store) {
  }

  getContent(language: string) {
    this.http.get(`assets/${language}.json`)
      .subscribe((content: ContentModel) => {
        this.store.dispatch(new SetContent(content));
        console.log(content);
      }
      );
  }
}
