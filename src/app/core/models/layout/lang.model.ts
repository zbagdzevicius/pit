import { ContentModel } from '../translate/content.model';
import { PolicyRoot } from '../policy/policy-root.model';
import { ImpressRoot } from '../impress/impress-root.model';

export class Lang {
  language: 'lt' | 'de' | 'en' | 'ru' | 'ua';
  content: ContentModel;
  policyRoot: PolicyRoot;
  impressRoot: ImpressRoot;

  constructor() {
    this.language = 'de';
    this.content = null;
    this.policyRoot = null;
    this.impressRoot = null;
  }
}
