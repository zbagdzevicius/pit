import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetImpress } from '../actions/lang.actions';
import { Store } from '@ngxs/store';
import { ImpressRoot } from '../models/impress/impress-root.model';

@Injectable({
  providedIn: 'root'
})
export class ImpressService {

  constructor(private http: HttpClient, private store: Store) {
  }

  getContent(language: string) {
    this.http.get(`assets/${language}_impress.json`)
      .subscribe((impressRoot: ImpressRoot) => {
        this.store.dispatch(new SetImpress(impressRoot));
      },
      error => console.log('there is no file with this name')
      );
  }
}
