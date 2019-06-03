import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LayoutModule } from '../layout/layout.module';
import { CoreModule } from '../core/core.module';
import { WebmasterComponent } from './webmaster/webmaster.component';
import { ImpressComponent } from './impress/impress.component';
import { PolicyComponent } from './policy/policy.component';

@NgModule({
  declarations: [LandingComponent, WebmasterComponent, ImpressComponent, PolicyComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    CoreModule
  ]
})
export class PagesModule { }
