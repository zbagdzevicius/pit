import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetWebmaster } from '../actions/lang.actions';
import { HttpClient } from '@angular/common/http';
import { WebmasterRoot } from '../models/webmaster/webmaster-root.model';

@Injectable({
  providedIn: 'root'
})
export class WebmasterService {
  constructor(private http: HttpClient, private store: Store) {
  }

  getContent(language: string) {
    this.http.get(`assets/${language}_webmaster.json`)
      .subscribe((webmasterRoot: WebmasterRoot) => {
        console.log(webmasterRoot);
        this.store.dispatch(new SetWebmaster(webmasterRoot));
      },
      error => console.log('there is no file with this name')
      );
  }
}
