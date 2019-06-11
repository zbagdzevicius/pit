import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LanguagePickerComponent } from './elements/language-picker/language-picker.component';
import { FooterAbsoluteComponent } from './components/footer-absolute/footer-absolute.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeadingComponent } from './components/heading/heading.component';
import { MenuComponent } from './elements/menu/menu.component';
import { ButtonComponent } from './elements/button/button.component';
import { LogoComponent } from './elements/logo/logo.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { SiteComponent } from './components/site/site.component';
import { ServicesComponent } from './components/services/services.component';
import { RowTextsComponent } from './elements/row-texts/row-texts.component';
import { RowImageComponent } from './elements/row-image/row-image.component';
import { VideoComponent } from './elements/video/video.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  HeaderComponent, FooterComponent,
  FooterAbsoluteComponent, HeroComponent,
  HeadingComponent,
  ContactComponent,
  AboutUsComponent,
  CompaniesComponent,
  SiteComponent,
  ButtonComponent,
  ServicesComponent
];

const ELEMENTS = [
  LanguagePickerComponent,
  MenuComponent,
  LogoComponent,
  RowTextsComponent,
  RowImageComponent,
  VideoComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...ELEMENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
