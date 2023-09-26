import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { AmountComponent } from './amount/amount.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';
import { CurrencyComponent } from './currency/currency.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
