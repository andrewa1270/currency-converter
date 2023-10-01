import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyAPIServiceService } from '../currency-api-service.service';
import { CurrencySelectorService } from '../currency-selector.service';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent implements OnInit{
  constructor(private http: HttpClient, private api: CurrencyAPIServiceService, public selectorService:CurrencySelectorService){ }

  ngOnInit(): void {
    // this.api.getData().subscribe((response) => {
    //   console.log(response)
    // })
      
  }

}
