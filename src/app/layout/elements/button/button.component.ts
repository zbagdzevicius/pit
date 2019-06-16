import { Component, OnInit, Input } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { AppSettings } from 'src/app/core/settings/app.settings';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Select(LangState.getContactButton) contactButton$: Observable<string>;
  contactButton: string;
  @Input() buttonText: string;
  offset = AppSettings.SCROLL_OFFSET;

  constructor() {
    this.contactButton$
      .subscribe(contactButton => this.contactButton = contactButton);
  }

  ngOnInit() {
  }

}
