import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PolicyComponent } from './policy/policy.component';
import { ImpressComponent } from './impress/impress.component';
import { WebmasterComponent } from './webmaster/webmaster.component';

const routes: Routes = [

  { path: 'policy', component: PolicyComponent },
  { path: 'impress', component: ImpressComponent },
  { path: 'webmaster', component: WebmasterComponent },
  { path: ':language/policy', component: WebmasterComponent },
  { path: ':language/impress', component: WebmasterComponent },
  { path: ':language/webmaster', component: WebmasterComponent },
  { path: '', component: LandingComponent },
  { path: ':language', component: LandingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
