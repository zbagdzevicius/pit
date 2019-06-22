import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from 'src/app/core/settings/app.settings';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() resizing: boolean;
  offset = AppSettings.SCROLL_OFFSET;
  animationShowing = true;

  constructor(
  ) {
  }

  ngOnInit() {
  }

  animationEnded() {
    this.animationShowing = false;
  }

}
