import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/core/models/translate/site.model';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { RowCardsImage } from 'src/app/core/models/translate/row-cards-image.model';
import { CardsLocation } from 'src/app/core/models/translate/cards-location.model';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  @Select(LangState.getSite) site$: Observable<Site>;
  site: Site;
  currentRow: RowCardsImage;

  constructor() {
    this.site$
      .subscribe(site => {
        if (site) {
          this.site = site;
          this.currentRow = site.cardsLocation[0].rowImage;
        }
      });
  }

  ngOnInit() {
  }

  changeCard(card: CardsLocation) {
    const index = this.site.cardsLocation.indexOf(card);
    this.currentRow = this.site.cardsLocation[index].rowImage;
  }

}
