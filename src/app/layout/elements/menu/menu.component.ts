import { Component, OnInit, Input, Inject } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LangState } from 'src/app/core/state/lang.state';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Select(LangState.getMenu) menu$: Observable<string[]>;
  menu: string[];
  @Input() activeMenuItem: string;
  offsets = [100, -76];
  offset = -76;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _scrollToService: ScrollToService
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
    let config: ScrollToConfigOptions;
    if ([2, 3].includes(index)) {
      if (index === 2) {
        const menuItemPosition = this.document.getElementById('siteCards').scrollHeight;
        const siteItems = ['siteCards', 'siteCardHero']
        const 'servicesCards','servicesCard','servicesHero'
        console.log(menuItemPosition);
        config = {
          target: 'siteCards',
          // offset: this.offset[1]
        };
      } else {
        config = {
          target: 'servicesCards',
          // offset: this.offset[1]
        };
      }
    } else {
      config = {
        target: this.menu[index]
      };
    }


    // this._scrollToService.scrollTo(config);
  }

}
