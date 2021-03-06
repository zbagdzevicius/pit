import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LangState } from 'src/app/core/state/lang.state';
import { Heading } from 'src/app/core/models/translate/heading.model';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Select(LangState.getHeading) heading$: Observable<Heading>;
  heading: Heading;
  isModalActive = false;
  imgSources = ['assets/images/play.png', 'assets/images/close.png'];
  videoSources = ['https://pit-deutschland.eu/pit-demo-1.webm', 'https://pit-deutschland.eu/PIT-production.mp4'];
  videoSourcesFallback = ['https://pit-deutschland.eu/assets/pit-demo.mp4'];
  videoSource: string;
  videoSourceFallback: string;

  constructor() {
    this.heading$
      .subscribe(heading => this.heading = heading);
  }

  turnOffVideo() {
    this.videoSource = null;
    this.videoSourceFallback = null;
    this.isModalActive = false;
  }
  turnOnVideo(index) {
    this.videoSource = this.videoSources[index];
    if(index === 0){
      this.videoSourceFallback = this.videoSourcesFallback[index];
    }
    this.isModalActive = true;
  }

  ngOnInit() {
  }

}
