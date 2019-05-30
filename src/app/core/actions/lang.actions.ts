import { Lang } from '../models/layout/lang.model';

export class SetLanguage {
  static readonly type = '[lang] set';
  constructor(public payload: Lang) { }
}
