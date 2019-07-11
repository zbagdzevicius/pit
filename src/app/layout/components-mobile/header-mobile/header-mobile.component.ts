import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/core/settings/app.settings';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  resizing: boolean;
  isMenuOpened = false;
  prevScrollPos: number;
  scrollingDown = true;
  pageSections = [];
  @Select(LangState.getMenu) menu$: Observable<string[]>;
  menu: string[];
  activeMenuItem: string;
  numberOfMenuItems: number;
  isHeaderOpened = true;

  constructor(@Inject(DOCUMENT) private document: Document,
    private router: Router) {
    this.menu$
      .subscribe(menu => {
        if (menu) {
          this.menu = menu;
          this.activeMenuItem = menu[0];
          this.numberOfMenuItems = this.menu.length;
        }
      }
      );
  }

  ngOnInit() {
  }

  openMenu() {
    this.isMenuOpened = true;
  }

  getPageSections() {
    if (this.menu.length !== 0) {
      const pageSections = [];
      for (const menuItem of this.menu) {
        const menuElement = this.document.getElementById(menuItem);
        if (menuElement) {
          const offset = menuElement.offsetTop;
          pageSections.push(offset);
        }
      }
      this.pageSections = pageSections;
    }
  }

  changeActiveButton(currentScrollPosition) {
    this.pageSections.forEach((sectionPosition, index) => {
      if ((sectionPosition + AppSettings.SCROLL_OFFSET) < currentScrollPosition) {
        if (this.menu[index] === undefined) {
          return;
        }
        this.activeMenuItem = this.menu[index];
      }
      return;
    });
  }

  @HostListener('document:scroll')
  onScroll() {
    const currentScrollPosition = window.scrollY;
    if (this.router.url === '/') {
      if (this.pageSections.length === this.numberOfMenuItems) {
        this.hideLogoOnServicesAndCompanies(currentScrollPosition);
        this.changeActiveButton(currentScrollPosition);
      } else {
        this.getPageSections();
      }
    } else {
      this.activeMenuItem = null;
    }
    this.resizeLogo(currentScrollPosition);
  }

  hideLogoOnServicesAndCompanies(currentScrollPosition) {
    if (this.pageSections[2] < currentScrollPosition && currentScrollPosition < this.pageSections[4]) {
      this.isHeaderOpened = false;
    } else {
      this.isHeaderOpened = true;
    }
  }

  resizeLogo(currentScrollPosition) {
    if (currentScrollPosition > 100) {
      this.resizing = true;
    } else {
      this.resizing = false;
    }
  }


}
