import { Component, OnInit } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select(LangState.getContactButton) contactButton$: Observable<string>;
  contactButton: string;

  constructor() {
    this.contactButton$
      .subscribe(contactButton => this.contactButton = contactButton);
  }

  ngOnInit() {
  }

}
