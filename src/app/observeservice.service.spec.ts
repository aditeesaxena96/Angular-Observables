import { TestBed, inject } from '@angular/core/testing';

import { ObserveserviceService } from './observeservice.service';

describe('ObserveserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObserveserviceService]
    });
  });

  it('should be created', inject([ObserveserviceService], (service: ObserveserviceService) => {
    expect(service).toBeTruthy();
  }));
});
