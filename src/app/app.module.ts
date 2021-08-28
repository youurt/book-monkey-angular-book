import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localDe from '@angular/common/locales/de';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { HomeComponent } from '@app/home/home.component';
import { SearchComponent } from '@app/search/search.component';
import { TokenInterceptor } from '@app/shared/token.interceptor';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'de' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localDe);
  }
}
