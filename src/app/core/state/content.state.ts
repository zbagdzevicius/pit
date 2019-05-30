import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetContent } from '../actions/content.actions';
import { ContentModel } from '../models/translate/content.model';


@State<ContentModel>({
  name: 'auth',
  defaults: {
    heading: null,
    menu: null,
    contactButton: null,
    heroes: null,
    cardsImage: null,
    cards: null,
    cardsLocation: null,
    contact: null,
    footer: null,
    footerAbsolute: null
  }
})

export class ContentState {

  @Selector()
  static getContent(content: ContentModel) {
    return content;
  }
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
  static getHeroes(content: ContentModel) {
    return content.heroes;
  }
  @Selector()
  static getCardsImage(content: ContentModel) {
    return content.cardsImage;
  }
  @Selector()
  static getCardsLocation(content: ContentModel) {
    return content.cardsLocation;
  }
  @Selector()
  static getCards(content: ContentModel) {
    return content.cards;
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
  @Action(SetContent)
  setContent(content: StateContext<ContentModel>, { payload }: SetContent) {
    content.patchState(payload);
  }
  // @Action(GetContent)
  // getContent(content: StateContext<ContentModel>) {
  //   content.getState();
  // }

}
