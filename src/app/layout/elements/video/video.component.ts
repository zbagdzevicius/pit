import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() videoSource: string;

  constructor() { }

  ngOnInit() {
  }


  turnOffVideo() {
    this.valueChange.emit(false);
}

}
