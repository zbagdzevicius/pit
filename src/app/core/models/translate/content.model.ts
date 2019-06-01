import { AboutUs } from './about-us.model';

import { Services } from '@angular/core/src/view';

import { Site } from './site.model';

import { Companies } from './companies.model';

import { Contact } from './contact.model';

import { Footer } from './footer.model';

import { FooterAbsolute } from './footer-absolute.model';

export class ContentModel {
  menu: string[];
  contactButton: string;
  heading: string;
  aboutUs: AboutUs;
  services: Services;
  site: Site;
  companies: Companies;
  contact: Contact;
  footer: Footer;
  footerAbsolute: FooterAbsolute;

  constructor(){
    this.menu = null;
    this.contactButton = null;
    this.heading = null;
    this.aboutUs = null;
    this.services = null;
    this.site = null;
    this.companies = null;
    this.contact = null;
    this.footer = null;
    this.footerAbsolute = null;
  }
}
