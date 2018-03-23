import { TestBed, inject } from '@angular/core/testing';

import { OrdensServicosService } from './ordens-servicos.service';

describe('OrdensServicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrdensServicosService]
    });
  });

  it('should be created', inject([OrdensServicosService], (service: OrdensServicosService) => {
    expect(service).toBeTruthy();
  }));
});
