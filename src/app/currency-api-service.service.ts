import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencySelectorService } from './currency-selector.service';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyAPIServiceService {
  jsondata:any
  totalFromSub!: number;
  total!: number;

  constructor(private http:HttpClient, private selectorService: CurrencySelectorService) { }

  // gets all data from API call  "www.bbc.co.uk"  //
  getData():Observable<any> {
    const url = /*DUMMY URL*/ "http://data.fixer.io/api/latest?access_key=82bd88359fb77e1b53f0c6f2f38f4a5a&format=1" 
    return this.http.get(url); //get() returns an observable representing the HTTP response that will be received from the specified URL
  }

  // Gets desired currency's abbreviation
  getCurrency(){
    return this.selectorService.clicked

  }

  getExchangeRate(abbr:string):Observable<number>{
    return this.getData().pipe(
      map((response:any) => {
        if(abbr == "USD"){
          return response.rates.USD
        }
        else if(abbr == "GBP"){
          return response.rates.GBP
        }
        else if(abbr == "JPY"){
          return response.rates.JPY
        }
        else if (abbr == "CHF"){
          return response.rates.CHF
        }
        else{
          return null
        }
      })
    )

  }

  // Calculates converted amount
  calculate(desiredAmount: string): Observable<number> {
    const selectedCurrency = this.getCurrency();
    
    if (selectedCurrency == "USD"){
      return this.getExchangeRate("USD").pipe(
        map((rate) => parseInt(desiredAmount) * rate)
      );
    }
    if (selectedCurrency == "GBP"){
      return this.getExchangeRate("GBP").pipe(
        map((rate) => parseInt(desiredAmount) * rate)
      );
    }
    if (selectedCurrency == "JPY"){
      return this.getExchangeRate("JPY").pipe(
        map((rate) => parseInt(desiredAmount) * rate)
      );
    }
    if (selectedCurrency == "CHF"){
      return this.getExchangeRate("CHF").pipe(
        map((rate) => parseInt(desiredAmount) * rate)
      );
    }
  
    // Handle the case where selectedCurrency is not recognized
    return of(0); // Return a default value or handle the error as needed
  }
  

}
