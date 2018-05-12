import { TestBed, inject } from '@angular/core/testing';

import { FilmesService } from './filmes.service';

describe('FilmesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmesService]
    });
  });

  it('should be created', inject([FilmesService], (service: FilmesService) => {
    expect(service).toBeTruthy();
  }));
});
