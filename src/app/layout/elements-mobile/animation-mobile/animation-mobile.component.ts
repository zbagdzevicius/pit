import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animation-mobile',
  templateUrl: './animation-mobile.component.html',
  styleUrls: ['./animation-mobile.component.scss']
})
export class AnimationMobileComponent implements OnInit {

  @Output() animationShow = new EventEmitter();
  animationDuration = 5 * 1000;
  // animationDuration = 0 * 1000;
  animationShowing = true;


  constructor(
  ) {
    this.executeAnimation();
  }

  ngOnInit() {
  }

  executeAnimation() {
    setTimeout(function () {
      this.animationShowing = false;
      this.animationShow.emit('false');
    }.bind(this), this.animationDuration);
  }

}
