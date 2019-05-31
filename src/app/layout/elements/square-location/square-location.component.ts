import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-location',
  templateUrl: './square-location.component.html',
  styleUrls: ['./square-location.component.scss']
})
export class SquareLocationComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() location: Location;

  constructor() { }

  ngOnInit() {
  }

}
