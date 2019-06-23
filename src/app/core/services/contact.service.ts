import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactForm } from '../models/layout/contact-form.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  send(contactForm: ContactForm) {
    console.log(contactForm);
    const formdata: FormData = new FormData();
    formdata.append('name', contactForm.name);
    formdata.append('email', contactForm.email);
    formdata.append('message', contactForm.message);
    formdata.append('token', '1');
    return this.http.post(environment.apiUrl, formdata);
  }


}
