import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SquareComponent } from './elements/square/square.component';
import { LanguagePickerComponent } from './elements/language-picker/language-picker.component';
import { FooterAbsoluteComponent } from './components/footer-absolute/footer-absolute.component';
import { HeroComponent } from './elements/hero/hero.component';
import { SquareLocationComponent } from './elements/square-location/square-location.component';
import { SquareImageComponent } from './elements/square-image/square-image.component';
import { CardsLocationComponent } from './components/cards-location/cards-location.component';
import { CardsImageComponent } from './components/cards-image/cards-image.component';
import { CardsComponent } from './components/cards/cards.component';
import { HeadingComponent } from './components/heading/heading.component';
import { MenuComponent } from './elements/menu/menu.component';
import { ButtonComponent } from './elements/button/button.component';
import { LogoComponent } from './elements/logo/logo.component';
import { CardImageRowComponent } from './rows/card-image-row/card-image-row.component';
import { CardRowComponent } from './rows/card-row/card-row.component';
import { CardLocationRowComponent } from './rows/card-location-row/card-location-row.component';
import { FormComponent } from './elements/form/form.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactInfoComponent } from './elements/contact-info/contact-info.component';
import { FooterFirstColumnComponent } from './rows/footer-first-column/footer-first-column.component';
import { FooterSecondColumnComponent } from './rows/footer-second-column/footer-second-column.component';

const COMPONENTS = [
  HeaderComponent, FooterComponent,
  FooterAbsoluteComponent, HeroComponent,
  CardsLocationComponent,
  CardsImageComponent,
  CardsComponent,
  HeadingComponent,
  ContactComponent,
  CardImageRowComponent,
  CardRowComponent,
  CardLocationRowComponent,
];

const ELEMENTS = [
  SquareImageComponent,
  SquareLocationComponent,
  SquareComponent,
  LanguagePickerComponent,
  MenuComponent,
  FormComponent,
  ContactInfoComponent,
  ButtonComponent,
  LogoComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...ELEMENTS,
    FooterFirstColumnComponent,
    FooterSecondColumnComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
