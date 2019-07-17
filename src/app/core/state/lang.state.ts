import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetLanguage,SetContent, SetImpress,
  SetPolicy, SetActiveCard, SetWebmaster,
  SetPolicyPopup, SetDevice, SetAnimation } from '../actions/lang.actions';
import { Lang } from '../models/layout/lang.model';
import { ContentModel } from '../models/translate/content.model';
import { PolicyRoot } from '../models/policy/policy-root.model';
import { ImpressRoot } from '../models/impress/impress-root.model';
import { ActiveCard } from '../models/layout/active-card.model';
import { WebmasterRoot } from '../models/webmaster/webmaster-root.model';
import { PolicyPopup } from '../models/popup/policy-popup.model';
import { Device } from '../models/etc/device.model';
import { Animation } from '../models/etc/animation.model';


@State<Lang>({
  name: 'auth',
  defaults: {
    language: 'de',
    content: new ContentModel(),
    policyRoot: new PolicyRoot(),
    impressRoot: new ImpressRoot(),
    webmasterRoot: null,
    activeCard: null,
    device: {isMobile: false},
    animation: {animationShowed: false},
  }
})

export class LangState {
  @Selector()
  static getContent(content: ContentModel){
    return content;
  }
  @Selector()
  static getAnimation(animation: Animation){
    return animation;
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
  static getSiteTitles(content: ContentModel) {
    return content.site.cardsLocation;
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
  @Selector()
  static getImpress(impressRoot: ImpressRoot) {
    return impressRoot;
  }
  @Selector()
  static getPolicy(policyRoot: PolicyRoot) {
    return policyRoot;
  }
  @Selector()
  static getWebmasterRoot(webmasterRoot: WebmasterRoot) {
    return webmasterRoot;
  }
  @Selector()
  static getActiveCard(cardLocation: string) {
    return cardLocation;
  }
  @Selector()
  static getPolicyPopup(policyPopup: PolicyPopup) {
    return policyPopup;
  }
  @Selector()
  static getDevice(device: Device) {
    return device;
  }

  @Action(SetLanguage)
  setLanguage(context: StateContext<Lang>, { payload }: SetLanguage) {
    context.patchState(payload);
  }

  @Action(SetContent)
  setContent(context: StateContext<ContentModel>, { payload }: SetContent) {
    context.patchState(payload);
  }
  @Action(SetImpress)
  setImpress(context: StateContext<ImpressRoot>, { payload }: SetImpress) {
    context.patchState(payload);
  }
  @Action(SetPolicy)
  setPolicy(context: StateContext<PolicyRoot>, { payload }: SetPolicy) {
    context.patchState(payload);
  }
  @Action(SetWebmaster)
  setWebmaster(context: StateContext<WebmasterRoot>, { payload }: SetWebmaster) {
    context.patchState(payload);
  }
  @Action(SetActiveCard)
  setActiveCard(context: StateContext<ActiveCard>, { payload }: SetActiveCard) {
    context.patchState(payload);
  }
  @Action(SetPolicyPopup)
  setPolicyPopup(context: StateContext<PolicyPopup>, { payload }: SetPolicyPopup) {
    context.patchState(payload);
  }
  @Action(SetDevice)
  setDevice(context: StateContext<Device>, { payload }: SetDevice) {
    context.patchState(payload);
  }

  @Action(SetAnimation)
  SetAnimation(context: StateContext<Animation>, { payload }: SetAnimation) {
    context.patchState(payload);
  }

}
