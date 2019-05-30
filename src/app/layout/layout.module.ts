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

const COMPONENTS = [
  HeaderComponent, FooterComponent,
  FooterAbsoluteComponent, HeroComponent,
  CardsLocationComponent,
  CardsImageComponent,
  CardsComponent,
  HeadingComponent,
];

const ELEMENTS = [
  SquareImageComponent,
  SquareLocationComponent,
  SquareComponent,
  LanguagePickerComponent,
  MenuComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...ELEMENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class LayoutModule { }
