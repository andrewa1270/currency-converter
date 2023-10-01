import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyAPIServiceService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = /*DUMMY URL*/ "www.bbc.co.uk" //"http://data.fixer.io/api/latest?access_key=82bd88359fb77e1b53f0c6f2f38f4a5a&format=1" 
    return this.http.get(url); //get() returns an observable representing the HTTP response that will be received from the specified URL
  }
}
