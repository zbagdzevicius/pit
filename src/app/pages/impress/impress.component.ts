import { Component, OnInit } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { ImpressRoot } from 'src/app/core/models/impress/impress-root.model';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { ColumnLeft } from 'src/app/core/models/impress/column-left.model';
import { ColumnRight } from 'src/app/core/models/impress/column-right.model';
import { ImpressService } from 'src/app/core/services/impress.service';
import { Text } from 'src/app/core/models/policy/text.model';
import { ActivatedRoute } from '@angular/router';
import { SetLanguage } from 'src/app/core/actions/lang.actions';
import { ContentModel } from 'src/app/core/models/translate/content.model';
import { PolicyRoot } from 'src/app/core/models/policy/policy-root.model';

@Component({
  selector: 'app-impress',
  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss']
})
export class ImpressComponent implements OnInit {
  @Select(LangState.getLanguage) language$: Observable<string>;
  @Select(LangState.getImpress) impressRoot$: Observable<ImpressRoot>;
  pageTitle: string;
  columnLeft: ColumnLeft;
  columnRight: ColumnRight;
  image: string;

  constructor(private impressService: ImpressService, private route: ActivatedRoute,
    private store: Store
  ) {
    this.language$
      .subscribe(language => {
        if (language) {
          this.impressService.getContent(language);
        }
      });
    this.impressRoot$
      .subscribe((impressRoot: ImpressRoot) => {
        if (impressRoot.impress) {
          this.pageTitle = impressRoot.pageTitle;
          this.columnLeft = impressRoot.impress.columnLeft;
          this.columnRight = impressRoot.impress.columnRight;
          if (impressRoot.impress.columnRight.image === '') {
            this.image = 'http://bertsrentals.com/wp-content/uploads/2017/08/300x300-placeholder.jpg';
          } else {
            this.image = impressRoot.impress.columnRight.image;
          }
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
