import { TestBed, inject } from '@angular/core/testing';

import { CustdataService } from './custdata.service';

describe('CustdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustdataService]
    });
  });

  it('should be created', inject([CustdataService], (service: CustdataService) => {
    expect(service).toBeTruthy();
  }));
});
