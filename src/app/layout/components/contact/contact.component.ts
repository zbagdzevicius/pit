import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Contact } from 'src/app/core/models/translate/contact.model';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactForm } from 'src/app/core/models/layout/contact-form.model';
import { AppSettings } from 'src/app/core/settings/app.settings';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Select(LangState.getContact) contact$: Observable<Contact>;
  @Input() contact: Contact;
  offset = AppSettings.SCROLL_OFFSET;
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
      this.contactService.send(this.contactForm)
        .subscribe(data => {
          console.log(data),
            error => {
              console.log(error);
            }
        });
      this.contactFormGroup.reset();
    }
  }

}
