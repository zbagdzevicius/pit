import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { FooterAbsolute } from 'src/app/core/models/translate/footer-absolute.model';
import { AppSettings } from 'src/app/core/settings/app.settings';

@Component({
  selector: 'app-footer-absolute-mobile',
  templateUrl: './footer-absolute-mobile.component.html',
  styleUrls: ['./footer-absolute-mobile.component.scss']
})
export class FooterAbsoluteMobileComponent implements OnInit {

  @Select(LangState.getFooterAbsolute) footerAbsolute$: Observable<FooterAbsolute>;
  footerAbsolute: FooterAbsolute;
  links = ['policy','impress','impress'];
  offset = AppSettings.SCROLL_OFFSET;

  constructor() {
    this.footerAbsolute$
      .subscribe(footerAbsolute => this.footerAbsolute = footerAbsolute);
  }

  ngOnInit() {
  }

}
