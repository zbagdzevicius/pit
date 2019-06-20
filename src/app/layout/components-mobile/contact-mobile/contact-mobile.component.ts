import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/models/translate/contact.model';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent implements OnInit {
  @Select(LangState.getContact) contact$: Observable<Contact>;
  @Input() contact: Contact;

  constructor() {
    this.contact$
    .subscribe(contact => this.contact = contact);
   }

  ngOnInit() {
  }

}
