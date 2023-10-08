import { Injectable } from '@angular/core';
import { CurrencyAPIServiceService } from './currency-api-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmountService {

  desiredAmount = "" 
  decimals = 0;
  converted = 0;
  constructor(private apiService: CurrencyAPIServiceService) { 
  }

  // Updates value of clicked variable upon each 
  update(character: KeyboardEvent){

    //Adds character to existing string if its an integer
    if (character.code.substring(0,5) === "Digit"){
      this.desiredAmount += character.key;
    }
    else if(character.code.substring(0,6) === "Period"){
      if (this.decimals == 0){
        this.desiredAmount += character.key
        this.decimals += 1
      }
      else{
        return
      }
    } 

    if (character.key == "Backspace"){
      let lastValue = this.desiredAmount.charAt(this.desiredAmount.length -1) // Gets last character of string

      // Creates new string from position 0 to -1 to remove last item
      let newDesiredInput = this.desiredAmount.slice(0,-1)
      this.desiredAmount = newDesiredInput

      // Logic to ensure only 1 decimal point at any given time
      if (lastValue == "."){
        this.decimals -= 1
      }

    }

    // Calls method that converts the value
    this.apiService.calculate(this.desiredAmount).subscribe((returnedVal) => {
      console.log("Value returned from different component " + returnedVal)

      this.converted = returnedVal;
    })

    console.log("value when converted is called " + this.converted)

  }

}
