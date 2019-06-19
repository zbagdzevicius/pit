import { Component, OnInit } from '@angular/core';
import { PolicyPopup } from 'src/app/core/models/popup/policy-popup.model';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-policy-popup',
  templateUrl: './policy-popup.component.html',
  styleUrls: ['./policy-popup.component.scss']
})
export class PolicyPopupComponent implements OnInit {
  @Select(LangState.getPolicyPopup) policyPopup$: Observable<PolicyPopup>;
  policyPopup: PolicyPopup;
  accepted: boolean;

  constructor() {
    if (!localStorage.getItem('cookiesAccepted')) {
      this.accepted = false;
      this.policyPopup$
        .subscribe(policyPopup => {
          this.policyPopup = policyPopup;
        });
    }
  }

  ngOnInit() {
  }

  accept() {
    localStorage.setItem('cookiesAccepted', 'true');
    this.accepted = true;
  }

}
