import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Services } from 'src/app/core/models/translate/services.model';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';
import { RowCard } from 'src/app/core/models/translate/row-card.model';
import { RowCardsImage } from 'src/app/core/models/translate/row-cards-image.model';
import { AppSettings } from 'src/app/core/settings/app.settings';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
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
