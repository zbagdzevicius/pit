import { Component, OnInit } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PolicyService } from 'src/app/core/services/policy.service';
import { PolicyRoot } from 'src/app/core/models/policy/policy-root.model';
import { Policy } from 'src/app/core/models/policy/policy.model';
import { ActivatedRoute } from '@angular/router';
import { SetLanguage } from 'src/app/core/actions/lang.actions';
import { ContentModel } from 'src/app/core/models/translate/content.model';
import { ImpressRoot } from 'src/app/core/models/impress/impress-root.model';

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

  constructor(private policyService: PolicyService,private route: ActivatedRoute,
    private store: Store
    ){
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
    this.route.params.subscribe(params => {
      if (params) {
        this.checkRouteParams();
      }
    });
  }

  checkRouteParams() {
    const language = this.route.snapshot.params['language'];
    console.log(language);
    if (language) {
      this.store.dispatch(new SetLanguage({
        language,
        content: new ContentModel(),
        policyRoot: new PolicyRoot(),
        impressRoot: new ImpressRoot(),
        webmasterRoot: null,
        activeCard: null,
        device: { isMobile: false },
        animation: { animationShowed: true }
      }));
    }
  }

}
