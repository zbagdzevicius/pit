import { Component, OnInit } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { Card } from 'src/app/core/models/translate/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Select(LangState.getCards) cards$: Observable<Card[]>;
  cardsRows;

  constructor() {
    this.cards$
      .subscribe(cards => {
        if (cards) {
          this.cardsRows = this.chunkArray(cards, 2);
          console.log(this.cardsRows);
        }
      }
      );
  }

  chunkArray(myArray, chunk_size) {
    const results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  }


  ngOnInit() {
  }

}
