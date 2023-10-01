import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmountService {

  constructor() { }

  // Updates value of clicked variable upon each 
  update(character: KeyboardEvent){
    console.log(character)
    // WIP - should run this method each time GBP value changed

    if (character.key == "Backspace"){
      console.log("backspace clicked")
    }
    
  }
}
