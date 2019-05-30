import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ContentState } from 'src/app/core/state/content.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Select(ContentState.getHeading) heading$: Observable<string>;
  heading: string;

  constructor() {
    this.heading$
    .subscribe(heading => this.heading = heading);
  }

  ngOnInit() {
  }

}
