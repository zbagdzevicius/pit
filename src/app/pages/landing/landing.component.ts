import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Device } from 'src/app/core/models/etc/device.model';
import { ContentModel } from 'src/app/core/models/translate/content.model';
import { AboutUs } from 'src/app/core/models/translate/about-us.model';
import { Services } from '@angular/core/src/view';
import { Site } from 'src/app/core/models/translate/site.model';
import { Companies } from 'src/app/core/models/translate/companies.model';
import { Heading } from 'src/app/core/models/translate/heading.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Select(LangState.getDevice) device$: Observable<Device>;
  isMobile: boolean;
  @Select(LangState.getContent) content$: Observable<ContentModel>;
  heroes: string[];
  aboutUs: AboutUs;
  services: Services;
  site: Site;
  companies: Companies;
  heading: Heading;

  constructor() {

    this.content$
      .subscribe((content: ContentModel) => {
        if (content) {
          this.setContent(content);
        }
      }
      );
    this.device$
      .subscribe(device => {
        if (device) {
          this.isMobile = device.isMobile;
        }
      }
      );
  }

  ngOnInit() {
  }

  setContent(content: ContentModel) {
    this.heroes = content.menu;
    this.aboutUs = content.aboutUs;
    this.services = content.services;
    this.site = content.site;
    this.companies = content.companies;
    this.heading = content.heading;
  }

}
