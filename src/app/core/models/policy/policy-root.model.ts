import { Policy } from './policy.model';

export class PolicyRoot {
  pageTitle: string;
  policy: Policy[];
  constructor() {
    this.pageTitle = null;
    this.policy = null;
  }
}
