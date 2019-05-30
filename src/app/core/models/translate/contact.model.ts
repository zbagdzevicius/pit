import { Question } from './question.model';
import { ContactBy } from './contact-by.model';
import { Form } from './form.model';

export class Contact {
  questions: Question[];
  contactBy: ContactBy[];
  form: Form;
}
