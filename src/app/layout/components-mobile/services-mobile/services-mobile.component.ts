import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Services } from 'src/app/core/models/translate/services.model';
import { RowCardsImage } from 'src/app/core/models/translate/row-cards-image.model';
import { AppSettings } from 'src/app/core/settings/app.settings';
import { RowCard } from 'src/app/core/models/translate/row-card.model';

@Component({
  selector: 'app-services-mobile',
  templateUrl: './services-mobile.component.html',
  styleUrls: ['./services-mobile.component.scss']
})
export class ServicesMobileComponent implements OnInit {

  @Select(LangState.getServices) services$: Observable<Services>;
  services: Services;
  currentRows: RowCardsImage[];
  index = 0;
  offset = AppSettings.SCROLL_OFFSET_CARDS;

  constructor() {
    this.services$
      .subscribe(services => {
        if (services){
          this.services = services;
          this.currentRows = services.rowCards[0].rowCardsImage;
        }
      });
  }


  ngOnInit() {
  }

  changeCard(rowCard: RowCard) {
    this.currentRows = rowCard.rowCardsImage;
    this.index = this.services.rowCards.indexOf(rowCard);
    // this.currentRow = this.services.cardsLocation[this.index].rowImage;
  }

}
