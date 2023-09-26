import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { AmountComponent } from './amount/amount.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { CurrencyComponent } from './currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    CurrencySelectorComponent,
    AmountComponent,
    ExchangeRateComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
