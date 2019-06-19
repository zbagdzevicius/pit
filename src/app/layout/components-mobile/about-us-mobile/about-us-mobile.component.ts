import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { AboutUs } from 'src/app/core/models/translate/about-us.model';

@Component({
  selector: 'app-about-us-mobile',
  templateUrl: './about-us-mobile.component.html',
  styleUrls: ['./about-us-mobile.component.scss']
})
export class AboutUsMobileComponent implements OnInit {
  @Select(LangState.getAboutUs) aboutUs$: Observable<AboutUs>;
  aboutUs: AboutUs;

  constructor() {
    this.aboutUs$
    .subscribe(aboutUs => this.aboutUs = aboutUs);
  }

  ngOnInit() {
  }

}
