import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencySelectorService } from './currency-selector.service';

@Injectable({
  providedIn: 'root'
})
export class CurrencyAPIServiceService {

  constructor(private http:HttpClient, private selectorService: CurrencySelectorService) { }

  // gets all data from API call
  getData(){
    let url = /*DUMMY URL*/ "www.bbc.co.uk" //"http://data.fixer.io/api/latest?access_key=82bd88359fb77e1b53f0c6f2f38f4a5a&format=1" 
    return this.http.get(url); //get() returns an observable representing the HTTP response that will be received from the specified URL
  }

  // Gets selected currency
  getCurrency(){
    console.log(this.selectorService.clicked);
    return this.selectorService.clicked

  }

  // Calculates converted amount
  calculate(){
    const selectedCurrency = this.getCurrency();
    if (selectedCurrency == "USD"){
      //USD 
    }
    if (selectedCurrency == "EUR"){
      //EUR 
    }
    if (selectedCurrency == "JPY"){
      //JPY 
    }
    else {
      //CHF 
    }
  }
}
