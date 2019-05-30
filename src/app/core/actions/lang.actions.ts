import { Lang } from '../models/layout/lang.model';
import { ContentModel } from '../models/translate/content.model';

export class SetLanguage {
  static readonly type = '[lang] set language';
  constructor(public payload: Lang) { }
}
export class SetContent {
  static readonly type = '[content] set content';
  constructor(public payload: ContentModel) { }
}
