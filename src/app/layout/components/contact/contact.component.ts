import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Contact } from 'src/app/core/models/translate/contact.model';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactForm } from 'src/app/core/models/layout/contact-form.model';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Select(LangState.getContact) contact$: Observable<Contact>;
  @Input() contact: Contact;
  // contactFormGroup: FormGroup;
  // contactForm: ContactForm;

  // constructor(private formBuilder: FormBuilder) {
  constructor() {
    this.contact$
      .subscribe(contact => this.contact = contact);
      // this.contactFormGroup = this.formBuilder.group({
      //   email: [new FormControl(''), [Validators.required, ContactService.emailValidator]],
      //   name: [new FormControl(''), [Validators.required, Validators.minLength(2)]],
      //   message: [new FormControl(''), [Validators.required, Validators.minLength(20)]]
      // }
      // );
  }

  ngOnInit() {
  }

}
