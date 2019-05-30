import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetLanguage } from '../actions/lang.actions';
import { Lang } from '../models/layout/lang.model';


@State<Lang>({
  name: 'auth',
  defaults: {
    language: 'de'
  }
})

export class LangState {

  @Selector()
  static getLanguage(lang: Lang) {
    return lang.language;
  }
  @Action(SetLanguage)
  setLanguage(context: StateContext<Lang>, { payload }: SetLanguage) {
    context.patchState(payload);
  }

}
