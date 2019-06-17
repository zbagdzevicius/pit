import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @Select(LangState.getMenu) heroes$: Observable<string[]>;
  heroes: string[];

  constructor() {
    this.heroes$
      .subscribe(heroes => {
        this.heroes = heroes;
      }
      );
  }

  ngOnInit() {
  }

}
