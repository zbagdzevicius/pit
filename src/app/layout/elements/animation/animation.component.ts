import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Animation } from 'src/app/core/models/etc/animation.model';
import { SetAnimation } from 'src/app/core/actions/lang.actions';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
  @Select(LangState.getAnimation) animation$: Observable<Animation>;
  @Output() animationShow = new EventEmitter();
  animationDuration = 9 * 1000;
  animationShowing = true;


  constructor(
    private store: Store
  ) {
    this.animation$
      .subscribe((animation: Animation) => {
        if (animation.animationShowed) {
          this.animationShowing = false;
        }
      });
    this.executeAnimation();
  }

  ngOnInit() {
  }

  executeAnimation() {
    setTimeout(function () {
      this.animationShowing = false;
      this.animationShow.emit('false');
      this.store.dispatch(new SetAnimation({ animationShowed: true }));
    }.bind(this), this.animationDuration);
  }

}
