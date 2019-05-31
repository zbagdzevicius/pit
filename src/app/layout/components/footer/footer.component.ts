import { Component, OnInit } from '@angular/core';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Footer } from 'src/app/core/models/translate/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Select(LangState.getFooter) footer$: Observable<Footer>;
  footer: Footer;

  constructor() {
    this.footer$
      .subscribe(footer => this.footer = footer);
  }

  ngOnInit() {
  }

}
