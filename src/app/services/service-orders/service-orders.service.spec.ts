import { TestBed } from '@angular/core/testing';

import { ServiceOrdersService } from './service-orders.service';

describe('ServiceOrdersService', () => {
  let service: ServiceOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
