// Services are singletons - only 1 instance is made and that same instance is passed to every component that imports it
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencySelectorService {
  clicked?: string;

  constructor() { }

  // sets a variable to the text of currency clicked
  wasClicked(abbr: string){
    const abbrID = document.getElementById('selectorButton');

    if (abbrID){
      abbrID.innerHTML = abbr;
      this.clicked = abbr; // sets clicked to current clicked currency
      console.log(this.clicked)
    }
    return
  }

}
