import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmountService {

  x = "" 
  constructor() { 
  }

  

  // Updates value of clicked variable upon each 
  update(character: KeyboardEvent){
    // WIP - should run this method each time GBP value changed
    console.log(character)

    if (character.code.substring(0,5) === "Digit"){
      this.x += character.key;
      console.log(this.x);
    }

    if (character.key == "Backspace"){
      console.log("backspace clicked")
    }
    
  }
}
