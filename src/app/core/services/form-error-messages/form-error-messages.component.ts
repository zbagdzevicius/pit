import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-form-error-messages',
  templateUrl: './form-error-messages.component.html',
  styleUrls: ['./form-error-messages.component.scss']
})
export class FormErrorMessagesComponent implements OnInit {

  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ContactService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

  ngOnInit() {
  }

}
