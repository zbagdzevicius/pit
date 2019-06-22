import { Component, OnInit } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Footer } from 'src/app/core/models/translate/footer.model';
import { CardsLocation } from 'src/app/core/models/translate/cards-location.model';
import { SetActiveCard } from 'src/app/core/actions/lang.actions';
import { AppSettings } from 'src/app/core/settings/app.settings';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Select(LangState.getSiteTitles) pageSiteCards$: Observable<CardsLocation[]>;
  @Select(LangState.getFooter) footer$: Observable<Footer>;
  footer: Footer;
  footerLinks = [];
  offset = AppSettings.SCROLL_OFFSET_CARDS;

  constructor(private store: Store) {
    this.footer$
    .subscribe(footer => this.footer = footer);
    this.pageSiteCards$
      .subscribe((cards: CardsLocation[]) => {
        if (cards) {
          cards.forEach(card => {
            this.footerLinks.push(card.title);
          });
        }
      });
  }

  ngOnInit() {
  }

  changeActiveCard(activeCardTitle: string){
    this.store.dispatch(new SetActiveCard({title: activeCardTitle}));
  }

}
