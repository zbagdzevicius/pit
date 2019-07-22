import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NgxsModule } from '@ngxs/store';
import { LangState } from './core/state/lang.state';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      LangState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
