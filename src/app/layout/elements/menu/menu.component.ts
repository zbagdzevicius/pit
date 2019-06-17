import { Component, OnInit, Input, Inject } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LangState } from 'src/app/core/state/lang.state';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { DOCUMENT } from '@angular/common';
import { AppSettings } from 'src/app/core/settings/app.settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Select(LangState.getMenu) menu$: Observable<string[]>;
  menu: string[];
  @Input() activeMenuItem: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _scrollToService: ScrollToService,
    private router: Router
  ) {
    this.menu$
      .subscribe(menu => {
        if (menu) {
          this.menu = menu;
          this.activeMenuItem = menu[0];
        }
      }
      );
  }

  ngOnInit() {

  }

  changeActive(index) {
    this.activeMenuItem = this.menu[index];
    this.scroll(index);
  }

  public triggerScrollTo(target) {

    const config: ScrollToConfigOptions = {
      target: target
    };

    this._scrollToService.scrollTo(config);
  }

  scroll(index: number) {
    if (index === 2) {
      this.scrollIntoView('siteCards');
    } else if (index === 3) {
      this.scrollIntoView('servicesCards');
    } else {
      const config: ScrollToConfigOptions = {
        offset: AppSettings.SCROLL_OFFSET,
        target: this.menu[index],
        duration: 0
      };
      this._scrollToService.scrollTo(config);
    }
  }

  scrollIntoView(elementId) {
    this.router.navigateByUrl('/');
    const checkExist = setInterval(function () {
      if (this.document.getElementById(elementId)) {
        clearInterval(checkExist);
        const element = this.document.getElementById(elementId);
        element.scrollIntoView(false);
      }
    }, 100);
  }

}
