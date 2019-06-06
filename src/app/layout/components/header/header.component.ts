import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { SiteComponent } from '../site/site.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild(SiteComponent, { read: ElementRef }) elementView: ElementRef;

  @Select(LangState.getContactButton) contactButton$: Observable<string>;
  @Select(LangState.getMenu) menu$: Observable<string[]>;
  contactButton: string;
  menu: string[];
  activeMenuItem: string;
  resizing = false;
  pageSections = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    this.contactButton$
      .subscribe(contactButton => this.contactButton = contactButton);
    this.menu$
      .subscribe(menu => {
        if (menu) {
          this.menu = menu;
          this.activeMenuItem = menu[0];
        }
      }
      );
  }
  @HostListener('document:scroll')
  onScroll() {
    const currentScrollPosition = window.scrollY;
    if (this.router.url === '/') {
      for (const menuItem of this.menu) {
        this.pageSections.push(this.document.getElementById(menuItem).offsetTop);
      }
      this.changeActiveButton(currentScrollPosition);
    }
    this.resizeLogo(currentScrollPosition);
  }


  ngOnInit() {
  }

  changeActiveButton(currentScrollPosition) {
    this.pageSections.forEach((sectionPosition, index) => {
      if (sectionPosition < currentScrollPosition) {
        if (this.menu[index] === undefined) {
          return;
        }
        this.activeMenuItem = this.menu[index];
      }
      return;
    });
  }
  resizeLogo(currentScrollPosition) {
    if (currentScrollPosition > 100) {
      this.resizing = true;
    } else {
      this.resizing = false;
    }
  }

}
