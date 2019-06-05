import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetPolicy } from '../actions/lang.actions';
import { Store } from '@ngxs/store';
import { PolicyRoot } from '../models/policy/policy-root.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient, private store: Store) {
  }

  getContent(language: string) {
    this.http.get(`assets/${language}_policy.json`)
      .subscribe((policyRoot: PolicyRoot) => {
        this.store.dispatch(new SetPolicy(policyRoot));
      }
      );
  }
}
