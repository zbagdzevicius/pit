import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Services } from 'src/app/core/models/translate/services.model';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';
import { RowCard } from 'src/app/core/models/translate/row-card.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Select(LangState.getServices) services$: Observable<Services>;
  services: Services;
  index = 0;

  constructor() {
    this.services$
      .subscribe(services => this.services = services);
  }


  ngOnInit() {
  }

  changeCard(card: RowCard) {
    this.index = this.services.rowCards.indexOf(card);
    // this.currentRow = this.services.cardsLocation[this.index].rowImage;
  }

}
