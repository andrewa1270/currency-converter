import { TestBed } from '@angular/core/testing';

import { CurrencyAPIServiceService } from './currency-api-service.service';

describe('CurrencyAPIServiceService', () => {
  let service: CurrencyAPIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyAPIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
