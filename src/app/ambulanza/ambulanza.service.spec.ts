import { TestBed } from '@angular/core/testing';

import { AmbulanzaService } from './ambulanza.service';

describe('AmbulanzaService', () => {
  let service: AmbulanzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmbulanzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
