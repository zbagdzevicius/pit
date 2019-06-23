import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from './services/content.service';
import { ContactService } from './services/contact.service';
import { ImpressService } from './services/impress.service';
import { PolicyService } from './services/policy.service';

@NgModule({
  declarations: [],
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
  ]
})
export class CoreModule { }
