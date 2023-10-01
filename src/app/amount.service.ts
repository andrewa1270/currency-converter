import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmountService {

  desiredAmount = "" 
  decimals = 0;
  constructor() { 
  }

  

  // Updates value of clicked variable upon each 
  update(character: KeyboardEvent){
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
      /* include way to check if character backspaced is period */
    }
    
  }
}
