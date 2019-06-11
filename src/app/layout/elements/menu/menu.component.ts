import { Component, OnInit, Input, Inject } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LangState } from 'src/app/core/state/lang.state';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

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

  constructor(private _scrollToService: ScrollToService) {
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

  changeActive(menuItem) {
    this.activeMenuItem = menuItem;
    this.scroll(menuItem);
  }

  public triggerScrollTo(target) {
    
    const config: ScrollToConfigOptions = {
      target: target
    };

    this._scrollToService.scrollTo(config);
  }

  scroll(el: HTMLElement) {
    window.scrollBy(0, 4000);
}

}
