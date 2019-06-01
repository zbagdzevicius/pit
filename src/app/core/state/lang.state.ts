import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetLanguage, SetContent } from '../actions/lang.actions';
import { Lang } from '../models/layout/lang.model';
import { ContentModel } from '../models/translate/content.model';


@State<Lang>({
  name: 'auth',
  defaults: {
    language: 'de',
    content: new ContentModel()
  }
})

export class LangState {
  @Selector()
  static getHeading(content: ContentModel) {
    return content.heading;
  }
  @Selector()
  static getMenu(content: ContentModel) {
    return content.menu;
  }
  @Selector()
  static getContactButton(content: ContentModel) {
    return content.contactButton;
  }
  @Selector()
  static getAboutUs(content: ContentModel) {
    return content.aboutUs;
  }
  @Selector()
  static getServices(content: ContentModel) {
    return content.services;
  }
  @Selector()
  static getSite(content: ContentModel) {
    return content.site;
  }
  @Selector()
  static getCompanies(content: ContentModel) {
    return content.companies;
  }
  @Selector()
  static getContact(content: ContentModel) {
    return content.contact;
  }
  @Selector()
  static getFooter(content: ContentModel) {
    return content.footer;
  }
  @Selector()
  static getFooterAbsolute(content: ContentModel) {
    return content.footerAbsolute;
  }
  @Selector()
  static getLanguage(lang: Lang) {
    return lang.language;
  }

  @Action(SetLanguage)
  setLanguage(context: StateContext<Lang>, { payload }: SetLanguage) {
    context.patchState(payload);
  }

  @Action(SetContent)
  setContent(context: StateContext<ContentModel>, { payload }: SetContent) {
    context.patchState(payload);
  }

}
