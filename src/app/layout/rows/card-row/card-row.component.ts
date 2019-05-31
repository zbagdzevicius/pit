import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/core/models/translate/card.model';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.scss']
})
export class CardRowComponent implements OnInit {
  @Input() cardsRow: Card[];

  constructor() { }

  ngOnInit() {
  }

}
