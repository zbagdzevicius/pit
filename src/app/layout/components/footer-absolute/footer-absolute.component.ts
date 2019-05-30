import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ContentState } from 'src/app/core/state/content.state';

@Component({
  selector: 'app-footer-absolute',
  templateUrl: './footer-absolute.component.html',
  styleUrls: ['./footer-absolute.component.scss']
})
export class FooterAbsoluteComponent implements OnInit {

  @Select(ContentState.getFooterAbsolute) footer$: Observable<string>;
  footerText: string;

  constructor() {
    this.footer$
    .subscribe(footer => this.footerText = footer);
  }

  ngOnInit() {
  }

}
