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
import { PolicyPopupComponent } from './components/policy-popup/policy-popup.component';
import { HeaderMobileComponent } from './components-mobile/header-mobile/header-mobile.component';
import { FooterAbsoluteMobileComponent } from './components-mobile/footer-absolute-mobile/footer-absolute-mobile.component';
import { FooterMobileComponent } from './components-mobile/footer-mobile/footer-mobile.component';
import { HeadingMobileComponent } from './components-mobile/heading-mobile/heading-mobile.component';
import { CompaniesMobileComponent } from './components-mobile/companies-mobile/companies-mobile.component';
import { AboutUsMobileComponent } from './components-mobile/about-us-mobile/about-us-mobile.component';
import { SiteMobileComponent } from './components-mobile/site-mobile/site-mobile.component';
import { ServicesMobileComponent } from './components-mobile/services-mobile/services-mobile.component';
import { ContactMobileComponent } from './components-mobile/contact-mobile/contact-mobile.component';

const COMPONENTS = [
  HeaderComponent, FooterComponent,
  FooterAbsoluteComponent, HeroComponent,
  HeadingComponent,
  ContactComponent,
  AboutUsComponent,
  CompaniesComponent,
  SiteComponent,
  ButtonComponent,
  ServicesComponent,
  PolicyPopupComponent,
  HeaderMobileComponent
];

const COMPONENTS_MOBILE = [
  FooterAbsoluteMobileComponent,
  FooterMobileComponent,
  HeadingMobileComponent,
  CompaniesMobileComponent,
  AboutUsMobileComponent,
  SiteMobileComponent,
  ServicesMobileComponent,
  ContactMobileComponent
]

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
    ...ELEMENTS,
    ...COMPONENTS_MOBILE
  ],
  imports: [
    CommonModule,
    RouterModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    ...COMPONENTS,
    ...COMPONENTS_MOBILE
  ]
})
export class LayoutModule { }
