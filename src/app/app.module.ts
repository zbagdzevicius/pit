import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NgxsModule } from '@ngxs/store';
import { LangState } from './core/state/lang.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    NgxsModule.forRoot([
      LangState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
