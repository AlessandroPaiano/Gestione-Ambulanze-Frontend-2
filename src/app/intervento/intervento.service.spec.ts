import { TestBed } from '@angular/core/testing';

import { InterventoService } from './intervento.service';

describe('InterventoService', () => {
  let service: InterventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
