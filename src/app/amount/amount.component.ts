import { Component, OnInit } from '@angular/core';
import { AmountService } from '../amount.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit{
  convertedVal = 0

  constructor(protected amountService: AmountService) { }

  ngOnInit(): void {
      
  }

  

  testFunc (){
    console.log(this.amountService.getConverted())
  }

}
