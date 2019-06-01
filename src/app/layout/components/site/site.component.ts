import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/core/models/translate/site.model';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  @Select(LangState.getSite) site$: Observable<Site>;
  site: Site;

  constructor() {
    this.site$
      .subscribe(site => this.site = site);
  }

  ngOnInit() {
  }

}
