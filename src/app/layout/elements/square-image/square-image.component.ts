import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-image',
  templateUrl: './square-image.component.html',
  styleUrls: ['./square-image.component.scss']
})
export class SquareImageComponent implements OnInit {
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
