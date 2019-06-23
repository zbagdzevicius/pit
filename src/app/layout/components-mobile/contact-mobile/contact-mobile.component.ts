import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/core/models/translate/contact.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactForm } from 'src/app/core/models/layout/contact-form.model';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss']
})
export class ContactMobileComponent implements OnInit {
  @Select(LangState.getContact) contact$: Observable<Contact>;
  @Input() contact: Contact;
  contactFormGroup: FormGroup;
  contactForm: ContactForm;

  constructor(private formBuilder: FormBuilder,
    private contactService: ContactService) {
    this.contact$
      .subscribe(contact => {
        if (contact) {
          this.contact = contact;
          this.newForm();
        }
      }
      );
  }

  ngOnInit() {
  }

  newForm() {
    this.contactFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    }
    );
  }

  onSubmit() {
    if (this.contactFormGroup.valid) {
      this.contactForm = this.contactFormGroup.value;
      this.contactService.send(this.contactForm);
      this.contactFormGroup.reset();
    }
  }

}
