import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Site } from 'src/app/core/models/translate/site.model';
import { ActiveCard } from 'src/app/core/models/layout/active-card.model';
import { AppSettings } from 'src/app/core/settings/app.settings';
import { SetActiveCard } from 'src/app/core/actions/lang.actions';
import { CardsLocation } from 'src/app/core/models/translate/cards-location.model';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-site-mobile',
  templateUrl: './site-mobile.component.html',
  styleUrls: ['./site-mobile.component.scss']
})
export class SiteMobileComponent implements OnInit {

  @Select(LangState.getSite) site$: Observable<Site>;
  @Select(LangState.getActiveCard) activeCard$: Observable<ActiveCard>;
  site: Site;
  indexOfActiveCard: number;
  currentCard: CardsLocation;
  numberOfCards: number;
  offset = AppSettings.SCROLL_OFFSET_CARDS;
  pageSections = [];


  constructor(
    @Inject(DOCUMENT) private document: Document) {
    this.site$
      .subscribe(site => {
        if (site) {
          this.site = site;
          this.numberOfCards = site.cardsLocation.length;
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
    for (const card of this.site.cardsLocation) {
      pageSections.push(this.document.getElementById(card.title).offsetTop);
    }
    this.pageSections = pageSections;
  }

  changeCurrentCardIndex(currentScrollPosition) {
    this.pageSections.forEach((value, index) => {
      if (currentScrollPosition >= value) {
        this.indexOfActiveCard = index;
      }
    });
  }


}
