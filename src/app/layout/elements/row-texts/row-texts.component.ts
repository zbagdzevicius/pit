import { Component, OnInit, Input } from '@angular/core';
import { RowTexts } from 'src/app/core/models/translate/row-texts.model';

@Component({
  selector: 'app-row-texts',
  templateUrl: './row-texts.component.html',
  styleUrls: ['./row-texts.component.scss']
})
export class RowTextsComponent implements OnInit {
  @Input() rowTexts: RowTexts;

  constructor() {}

  ngOnInit() {
  }

}
