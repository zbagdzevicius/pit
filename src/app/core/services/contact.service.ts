import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactForm } from '../models/layout/contact-form.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      invalidEmailAddress: 'Invalid email address',
      required: 'Required',
      minlength: `Minimum length is ${validatorValue.requiredLength}`,
      maxlength: `Maximum length is  ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  constructor(private http: HttpClient) { }

  send(contactForm: ContactForm) {
    const formdata: FormData = new FormData();
    formdata.append('name', contactForm.name);
    formdata.append('email', contactForm.email);
    formdata.append('message', contactForm.message);
    return this.http.post('https://pit-contact-form.herokuapp.com/', formdata);
  }

  
}
