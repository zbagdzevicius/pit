import { CardsImage } from './cards-image.model';
import { Card } from './card.model';
import { CardsLocation } from './cards-location.model';
import { Contact } from './contact.model';
import { Footer } from './footer.model';

export class ContentModel {
  heading: string;
  menu: string[];
  contactButton: string;
  heroes: string[];
  cardsImage: CardsImage[];
  cards: Card[];
  cardsLocation: CardsLocation[];
  contact: Contact;
  footer: Footer;
  footerAbsolute: string;
}
