import { Component, OnInit, Input } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { CardsLocation } from 'src/app/core/models/translate/cards-location.model';
import { Footer } from 'src/app/core/models/translate/footer.model';
import { AppSettings } from 'src/app/core/settings/app.settings';
import { SetActiveCard } from 'src/app/core/actions/lang.actions';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {
  @Select(LangState.getFooter) footer$: Observable<Footer>;
  footer: Footer;
  footerLinks = [];
  offset = AppSettings.SCROLL_OFFSET_CARDS;

  constructor() {
    this.footer$
    .subscribe(footer => this.footer = footer);
  }

  ngOnInit() {
  }

}
