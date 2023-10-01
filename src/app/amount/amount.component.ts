import { Component } from '@angular/core';
import { AmountService } from '../amount.service';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent {
  test: number | undefined

  constructor(protected amountService: AmountService) { }

}
