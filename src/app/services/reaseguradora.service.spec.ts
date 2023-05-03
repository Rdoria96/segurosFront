import { TestBed } from '@angular/core/testing';

import { ReaseguradoraService } from './reaseguradora.service';

describe('ReaseguradoraService', () => {
  let service: ReaseguradoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaseguradoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
