import { Component, OnInit } from '@angular/core';
import { WebmasterService } from 'src/app/core/services/webmaster.service';
import { WebmasterRoot } from 'src/app/core/models/webmaster/webmaster-root.model';
import { Select, Store } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Webmaster } from 'src/app/core/models/webmaster/webmaster.model';
import { ActivatedRoute } from '@angular/router';
import { SetLanguage } from 'src/app/core/actions/lang.actions';
import { ContentModel } from 'src/app/core/models/translate/content.model';
import { PolicyRoot } from 'src/app/core/models/policy/policy-root.model';
import { ImpressRoot } from 'src/app/core/models/impress/impress-root.model';

@Component({
  selector: 'app-webmaster',
  templateUrl: './webmaster.component.html',
  styleUrls: ['./webmaster.component.scss']
})
export class WebmasterComponent implements OnInit {
  @Select(LangState.getLanguage) language$: Observable<string>;
  @Select(LangState.getWebmasterRoot) webmasterRoot$: Observable<WebmasterRoot>;
  pageTitle: string;
  content: Webmaster[];
  image: string;

  constructor(private webmasterService: WebmasterService, private route: ActivatedRoute,
    private store: Store
  ) {
    this.language$
      .subscribe(language => {
        if (language) {
          this.webmasterService.getContent(language);
        }
      });
    this.webmasterRoot$
      .subscribe(webmasterRoot => {
        if (webmasterRoot) {
          this.pageTitle = webmasterRoot.pageTitle;
          this.content = webmasterRoot.texts;
          this.image = webmasterRoot.image;
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
