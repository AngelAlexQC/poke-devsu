import { TestBed } from '@angular/core/testing';

import { PokeAPIService } from './poke-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('PokeAPIService', () => {
  let service: PokeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
    });
    service = TestBed.inject(PokeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
