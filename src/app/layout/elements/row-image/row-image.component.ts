import { Component, OnInit, Input } from '@angular/core';
import { RowCardsImage } from 'src/app/core/models/translate/row-cards-image.model';

@Component({
  selector: 'app-row-image',
  templateUrl: './row-image.component.html',
  styleUrls: ['./row-image.component.scss']
})
export class RowImageComponent implements OnInit {
  @Input() rowImage: RowCardsImage;
  @Input() isReversed: boolean;
  @Input() smallFont: boolean;

  constructor() { }

  ngOnInit() {
  }

}
