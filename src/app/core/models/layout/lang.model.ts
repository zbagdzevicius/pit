import { ContentModel } from '../translate/content.model';

export class Lang {
  language: 'lt' | 'de' | 'en' | 'ru' | 'ua';
  content: ContentModel;

  constructor() {
    this.language = 'de';
    this.content = null;
  }
}
