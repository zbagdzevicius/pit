import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  turnOffVideo() {
    this.valueChange.emit(false);
}

}
