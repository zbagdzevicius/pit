import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LangState } from 'src/app/core/state/lang.state';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Select(LangState.getHeading) heading$: Observable<string>;
  heading: string;
  isModalActive = false;
  imgSources = ['assets/images/play.png', 'assets/images/close.png'];
  videoSources = ['https://pit-deutschland.eu/PIT-production.mp4', 'https://pit-deutschland.eu/PIT-production.mp4'];
  videoSource: string;

  constructor() {
    this.heading$
      .subscribe(heading => this.heading = heading);
  }

  turnOffVideo($event) {
    this.isModalActive = false;
    this.videoSource = null;
  }
  turnOnVideo(index) {
    this.videoSource = this.videoSources[0];
    this.isModalActive = true;
  }

  ngOnInit() {
  }

}
