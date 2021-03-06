import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() hero: string;
  @Input() fill: false;
  @Input() isMobile: boolean;

  ngOnInit() {
  }

}
