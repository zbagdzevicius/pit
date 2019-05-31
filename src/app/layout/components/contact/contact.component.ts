import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Contact } from 'src/app/core/models/translate/contact.model';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Select(LangState.getContact) contact$: Observable<Contact>;
  contact: Contact;

  constructor() {
    this.contact$
      .subscribe(contact => this.contact = contact);
  }

  ngOnInit() {
  }

}
