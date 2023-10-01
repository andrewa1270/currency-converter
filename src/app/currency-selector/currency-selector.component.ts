import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyAPIServiceService } from '../currency-api-service.service';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit{
  constructor(private http: HttpClient, private api: CurrencyAPIServiceService){
    let clicked;
  }

  ngOnInit(): void {
    this.api.getData().subscribe((response) => {
      console.log(response)
    })
      
  }

  // sets a variable to the text of currency clicked
  wasClicked(abbr: string){
    let clicked = abbr;
    const abbrID = document.getElementById('selectorButton');

    if (abbrID){
      abbrID.innerHTML = abbr;
      console.log(abbrID.innerHTML);
    }
  }

}
