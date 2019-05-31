import { Component, OnInit, Input } from '@angular/core';
import { RightColumn } from 'src/app/core/models/translate/right-clumn.model';

@Component({
  selector: 'app-footer-second-column',
  templateUrl: './footer-second-column.component.html',
  styleUrls: ['./footer-second-column.component.scss']
})
export class FooterSecondColumnComponent implements OnInit {
  @Input() rightColumn: RightColumn;

  constructor() { }

  ngOnInit() {
  }

}
