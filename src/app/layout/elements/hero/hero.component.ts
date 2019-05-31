import { Component, OnInit, Input } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Select(LangState.getHeroes) heroes$: Observable<string[]>;
  heroes: string[];
  @Input() index: number;

  constructor() {
    this.heroes$
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
  }

}
