import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  @Output() animationShow = new EventEmitter();
  animationDuration = 12 * 1000;
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
