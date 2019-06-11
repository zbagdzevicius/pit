import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from './services/content.service';
import { FormErrorMessagesComponent } from './services/form-error-messages/form-error-messages.component';
import { ContactService } from './services/contact.service';
import { ImpressService } from './services/impress.service';
import { PolicyService } from './services/policy.service';

@NgModule({
  declarations: [FormErrorMessagesComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ContentService,
    ContactService,
    ImpressService,
    PolicyService
  ],
  exports: [
    FormErrorMessagesComponent
  ]
})
export class CoreModule { }
