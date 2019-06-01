import { Component, OnInit, Input } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Select(LangState.getContactButton) contactButton$: Observable<string>;
  contactButton: string;
  @Input() buttonText: string;

  constructor() {
    this.contactButton$
      .subscribe(contactButton => this.contactButton = contactButton);
  }

  ngOnInit() {
  }

}
