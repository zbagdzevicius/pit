import { Component, OnInit, Input } from '@angular/core';
import { AppSettings } from 'src/app/core/settings/app.settings';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Device } from 'src/app/core/models/etc/device.model';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() resizing: boolean;
  offset = AppSettings.SCROLL_OFFSET;
  animationShowing = true;
  isMobile = true;
  @Select(LangState.getDevice) device$: Observable<Device>;

  constructor(
  ) {
    this.device$.subscribe(device => {
      if (device.isMobile) {
        this.animationShowing = false;
      } else {
        this.isMobile = false;
      }
    });
  }

  ngOnInit() {
  }

  animationEnded() {
    this.animationShowing = false;
  }

}
