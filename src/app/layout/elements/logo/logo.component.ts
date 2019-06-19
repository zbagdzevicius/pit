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
  animationDuration = 0 * 1000;
  animationShowing = true;

  constructor(
  ) {
    this.executeAnimation();
  }

  ngOnInit() {
  }

  executeAnimation() {
    console.log('gg');
    setTimeout(function () {
      this.animationShowing = false;
    }.bind(this), this.animationDuration);
  }

}
