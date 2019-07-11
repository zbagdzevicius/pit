import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Heading } from 'src/app/core/models/translate/heading.model';

@Component({
  selector: 'app-heading-mobile',
  templateUrl: './heading-mobile.component.html',
  styleUrls: ['./heading-mobile.component.scss']
})
export class HeadingMobileComponent implements OnInit {
  @Select(LangState.getHeading) heading$: Observable<Heading>;
  heading: Heading;
  isModalActive = false;
  imgSources = ['assets/images/play.png', 'assets/images/close.png'];
  videoSources = ['https://pit-deutschland.eu/assets/pit-demo.mp4', 'https://pit-deutschland.eu/PIT-production.mp4'];
  videoSource: string;

  constructor() {
    this.heading$
      .subscribe(heading => this.heading = heading);
  }

  turnOffVideo() {
    this.videoSource = null;
    this.isModalActive = false;
  }
  
  turnOnVideo(index) {
    this.videoSource = this.videoSources[index];
    this.isModalActive = true;
  }


  ngOnInit() {
  }

}
