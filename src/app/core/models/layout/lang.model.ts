import { ContentModel } from '../translate/content.model';
import { PolicyRoot } from '../policy/policy-root.model';
import { ImpressRoot } from '../impress/impress-root.model';
import { WebmasterRoot } from '../webmaster/webmaster-root.model';
import { Device } from '../etc/device.model';
import { Animation } from '../etc/animation.model';

export class Lang {
  language: 'lt' | 'de' | 'en' | 'ru' | 'ua';
  content: ContentModel;
  policyRoot: PolicyRoot;
  impressRoot: ImpressRoot;
  webmasterRoot: WebmasterRoot;
  activeCard: string;
  device: Device;
  animation: Animation;


  constructor() {
    this.language = 'de';
    this.content = null;
    this.policyRoot = null;
    this.impressRoot = null;
    this.webmasterRoot = null;
    this.activeCard = null;
    this.device = null;
    this.animation = null;
  }
}
