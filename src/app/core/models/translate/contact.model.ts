import { Address } from './address.model';
import { ContactBy } from './contact-by.model';
import { Form } from './form.model';

export class Contact {
  address: Address;
  contactBy: ContactBy[];
  form: Form;
}
