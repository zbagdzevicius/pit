import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LangState } from 'src/app/core/state/lang.state';
import { FooterAbsolute } from 'src/app/core/models/translate/footer-absolute.model';

@Component({
  selector: 'app-footer-absolute',
  templateUrl: './footer-absolute.component.html',
  styleUrls: ['./footer-absolute.component.scss']
})
export class FooterAbsoluteComponent implements OnInit {

  @Select(LangState.getFooterAbsolute) footerAbsolute$: Observable<FooterAbsolute>;
  footerAbsolute: FooterAbsolute;
  links = ['/policy','/impress','/webmaster'];

  constructor() {
    this.footerAbsolute$
      .subscribe(footerAbsolute => this.footerAbsolute = footerAbsolute);
  }

  ngOnInit() {
  }

}
