import { Component, OnInit } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AboutUs } from 'src/app/core/models/translate/about-us.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  @Select(LangState.getAboutUs) aboutUs$: Observable<AboutUs>;
  aboutUs: AboutUs;

  constructor() {
    this.aboutUs$
    .subscribe(aboutUs => this.aboutUs = aboutUs);
  }

  ngOnInit() {
  }

}
