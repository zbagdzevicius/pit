import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/core/models/translate/site.model';
import { Select, Store } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { RowCardsImage } from 'src/app/core/models/translate/row-cards-image.model';
import { CardsLocation } from 'src/app/core/models/translate/cards-location.model';
import { SetActiveCard } from 'src/app/core/actions/lang.actions';
import { ActiveCard } from 'src/app/core/models/layout/active-card.model';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  @Select(LangState.getSite) site$: Observable<Site>;
  @Select(LangState.getActiveCard) activeCard$: Observable<ActiveCard>;
  site: Site;
  currentRow: RowCardsImage;
  indexOfActiveCard = 0;

  constructor(private store: Store) {
    this.site$
      .subscribe(site => {
        if (site) {
          this.site = site;
          const currentRowName = site.cardsLocation[0].title;
          this.store.dispatch(new SetActiveCard({title: currentRowName}));
        }
      });
      this.activeCard$
      .subscribe( (activeCard: ActiveCard) => {
        this.indexOfActiveCard = this.site.cardsLocation.map((o) => o.title).indexOf(activeCard.title);
        this.currentRow = this.site.cardsLocation[this.indexOfActiveCard].rowImage;
      })
  }

  ngOnInit() {
  }

  changeCard(card: CardsLocation) {
    this.store.dispatch(new SetActiveCard({title: card.title}));
  }

}
