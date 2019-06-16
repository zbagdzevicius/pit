import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LayoutModule } from '../layout/layout.module';
import { CoreModule } from '../core/core.module';
import { ImpressComponent } from './impress/impress.component';
import { PolicyComponent } from './policy/policy.component';
import { TextsComponent } from './components/texts/texts.component';
import { WebmasterComponent } from './webmaster/webmaster.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [LandingComponent, ImpressComponent, PolicyComponent, TextsComponent, WebmasterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    CoreModule,
    ScrollToModule
  ]
})
export class PagesModule { }
