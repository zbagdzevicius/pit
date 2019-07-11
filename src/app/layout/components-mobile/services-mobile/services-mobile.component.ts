import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Services } from 'src/app/core/models/translate/services.model';
import { RowCardsImage } from 'src/app/core/models/translate/row-cards-image.model';
import { AppSettings } from 'src/app/core/settings/app.settings';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-services-mobile',
  templateUrl: './services-mobile.component.html',
  styleUrls: ['./services-mobile.component.scss']
})
export class ServicesMobileComponent implements OnInit {

  @Select(LangState.getServices) services$: Observable<Services>;
  services: Services;
  currentRows: RowCardsImage[];
  offset = AppSettings.SCROLL_OFFSET_CARDS;
  pageSections = [];
  numberOfCards: number;
  indexOfActiveCard: number;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.services$
      .subscribe(services => {
        if (services) {
          this.services = services;
          this.numberOfCards = services.rowCards.length;
        }
      });
  }


  ngOnInit() {
  }

  @HostListener('document:scroll')
  onScroll() {
    if (this.pageSections.length === this.numberOfCards) {
      const currentScrollPosition = window.scrollY;
      this.changeCurrentCardIndex(currentScrollPosition);
    } else {
      this.getLocationsOfCards();
    }
  }

  getLocationsOfCards() {
    const pageSections = [];
    for (const card of this.services.rowCards) {
      pageSections.push(this.document.getElementById(card.title).offsetTop);
    }
    this.pageSections = pageSections;
  }

  changeCurrentCardIndex(currentScrollPosition) {
    this.pageSections.forEach((value, index) => {
      if (currentScrollPosition + 200 >= value) {
        this.indexOfActiveCard = index;
      }
    });
  }

}
