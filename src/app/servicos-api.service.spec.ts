import { TestBed } from '@angular/core/testing';

import { ServicosApiService } from './servicos-api.service';

describe('ServicosApiService', () => {
  let service: ServicosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
