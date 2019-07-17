import { Lang } from '../models/layout/lang.model';
import { ContentModel } from '../models/translate/content.model';
import { PolicyRoot } from '../models/policy/policy-root.model';
import { ImpressRoot } from '../models/impress/impress-root.model';
import { ActiveCard } from '../models/layout/active-card.model';
import { WebmasterRoot } from '../models/webmaster/webmaster-root.model';
import { PolicyPopup } from '../models/popup/policy-popup.model';
import { Device } from '../models/etc/device.model';
import { Animation } from '../models/etc/animation.model';

export class SetLanguage {
  static readonly type = '[lang] set language';
  constructor(public payload: Lang) { }
}
export class SetContent {
  static readonly type = '[content] set content';
  constructor(public payload: ContentModel) { }
}
export class SetPolicy {
  static readonly type = '[policy] set policy';
  constructor(public payload: PolicyRoot) { }
}
export class SetImpress {
  static readonly type = '[impress] set impress';
  constructor(public payload: ImpressRoot) { }
}
export class SetWebmaster {
  static readonly type = '[webmaster] set webmaster';
  constructor(public payload: WebmasterRoot) { }
}
export class SetActiveCard {
  static readonly type = '[impress] set siteCard';
  constructor(public payload: ActiveCard) { }
}
export class SetPolicyPopup {
  static readonly type = '[policyPopup] set policyPopup';
  constructor(public payload: PolicyPopup) { }
}
export class SetDevice {
  static readonly type = '[device] set device';
  constructor(public payload: Device) { }
}
export class SetAnimation {
  static readonly type = '[animation] set animation';
  constructor(public payload: Animation) { }
}
