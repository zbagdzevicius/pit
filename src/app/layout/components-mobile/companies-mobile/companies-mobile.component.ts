import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { LangState } from 'src/app/core/state/lang.state';
import { Observable } from 'rxjs';
import { Companies } from 'src/app/core/models/translate/companies.model';

@Component({
  selector: 'app-companies-mobile',
  templateUrl: './companies-mobile.component.html',
  styleUrls: ['./companies-mobile.component.scss']
})
export class CompaniesMobileComponent implements OnInit {
  @Select(LangState.getCompanies) companies$: Observable<Companies>;
  companies: Companies;

  constructor() {
    this.companies$
      .subscribe(companies => this.companies = companies);
  }


  ngOnInit() {
  }

}
