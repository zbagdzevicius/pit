import { Component, OnInit } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PolicyService } from 'src/app/core/services/policy.service';
import { PolicyRoot } from 'src/app/core/models/policy/policy-root.model';
import { Policy } from 'src/app/core/models/policy/policy.model';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {
  @Select(LangState.getLanguage) language$: Observable<string>;
  @Select(LangState.getPolicy) policyRoot$: Observable<PolicyRoot>;
  pageTitle: string;
  content: Policy[];

  constructor(private policyService: PolicyService) {
    this.language$
      .subscribe(language => {
        if (language) {
          this.policyService.getContent(language);
        }
      });
      this.policyRoot$
      .subscribe( policyRoot => {
        if (policyRoot) {
          this.pageTitle = policyRoot.pageTitle;
          this.content = policyRoot.policy;
        }
      });
  }

  ngOnInit() {

  }

}
