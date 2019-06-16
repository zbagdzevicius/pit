import { Component, OnInit } from '@angular/core';
import { WebmasterService } from 'src/app/core/services/webmaster.service';
import { WebmasterRoot } from 'src/app/core/models/webmaster/webmaster-root.model';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Webmaster } from 'src/app/core/models/webmaster/webmaster.model';

@Component({
  selector: 'app-webmaster',
  templateUrl: './webmaster.component.html',
  styleUrls: ['./webmaster.component.scss']
})
export class WebmasterComponent implements OnInit {
  @Select(LangState.getLanguage) language$: Observable<string>;
  @Select(LangState.getWebmasterRoot) webmasterRoot$: Observable<WebmasterRoot>;
  pageTitle: string;
  content: Webmaster[];
  image: string;

  constructor(private webmasterService: WebmasterService) {
    this.language$
      .subscribe(language => {
        if (language) {
          this.webmasterService.getContent(language);
        }
      });
      this.webmasterRoot$
      .subscribe( webmasterRoot => {
        if (webmasterRoot) {
          this.pageTitle = webmasterRoot.pageTitle;
          this.content = webmasterRoot.texts;
          this.image = webmasterRoot.image;
        }
      });
  }

  ngOnInit() {
  }

}
