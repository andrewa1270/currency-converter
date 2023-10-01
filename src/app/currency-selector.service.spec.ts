import { TestBed } from '@angular/core/testing';

import { CurrencySelectorService } from './currency-selector.service';

describe('CurrencySelectorService', () => {
  let service: CurrencySelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencySelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
