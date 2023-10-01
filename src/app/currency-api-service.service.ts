import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencySelectorService } from './currency-selector.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyAPIServiceService {
  jsondata:any
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
  calculate(desiredAmount: string):number {
    const selectedCurrency = this.getCurrency();
    
    
    if (selectedCurrency == "USD"){
      const rate = this.getExchangeRate("USD").subscribe((rate) => {
      this.total = parseInt(desiredAmount) * rate
      console.log(this.total)
      })
      //USD 
    }
    if (selectedCurrency == "GBP"){
      const rate = this.getExchangeRate("GBP").subscribe((rate) => {
      this.total = parseInt(desiredAmount) * rate
      })
      //GBP 
    }
    if (selectedCurrency == "JPY"){
      const rate = this.getExchangeRate("JPY").subscribe((rate) => {
        this.total = parseInt(desiredAmount) * rate
      })
      //JPY 
    }
    else if (selectedCurrency == "CHF"){
        const rate = this.getExchangeRate("CHF").subscribe((rate) => {
          this.total = parseInt(desiredAmount) * rate
      })
      //CHF 
    }
    else {
      ;
    }

    return this.total
  }

}
