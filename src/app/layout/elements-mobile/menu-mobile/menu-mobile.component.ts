import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/settings/app.settings';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  @Select(LangState.getMenu) menu$: Observable<string[]>;
  menu: string[];
  @Input() activeMenuItem: string;
  @Output() menuClosed = new EventEmitter();
  offset = AppSettings.SCROLL_OFFSET + 1;

  constructor(
  ) {
    this.menu$
      .subscribe(menu => {
        if (menu) {
          this.menu = menu;
        }
      }
      );
  }

  ngOnInit() {
  }

  menuClose() {
    this.menuClosed.emit('closed');
  }
}
