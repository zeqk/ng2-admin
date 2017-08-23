import { TestBed, inject } from '@angular/core/testing';

import { TerritoriesService } from './territories.service';

describe('TerritoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TerritoriesService]
    });
  });

  it('should be created', inject([TerritoriesService], (service: TerritoriesService) => {
    expect(service).toBeTruthy();
  }));
});
