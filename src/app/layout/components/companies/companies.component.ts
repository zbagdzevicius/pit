import { Component, OnInit} from '@angular/core';
import { Companies } from 'src/app/core/models/translate/companies.model';
import { Observable } from 'rxjs/internal/Observable';
import { LangState } from 'src/app/core/state/lang.state';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  @Select(LangState.getCompanies) companies$: Observable<Companies>;
  companies: Companies;

  constructor() {
    this.companies$
    .subscribe(companies => this.companies = companies);
  }

  ngOnInit() {
  }

}
