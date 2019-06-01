import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Services } from 'src/app/core/models/translate/services.model';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Select(LangState.getServices) services$: Observable<Services>;
  services: Services;

  constructor() {
    this.services$
      .subscribe(services => this.services = services);
  }


  ngOnInit() {
  }

}
