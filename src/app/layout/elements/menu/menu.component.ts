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
  offset = AppSettings.SCROLL_OFFSET + 1;

  constructor() {
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

}
