import { ContentModel } from '../models/translate/content.model';

export class SetContent {
  static readonly type = '[content] set';
  constructor(public payload: ContentModel) { }
}
// export class GetContent {
//   static readonly type = '[content] get';
// }
