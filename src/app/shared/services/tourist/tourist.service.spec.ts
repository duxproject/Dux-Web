import { TestBed } from '@angular/core/testing';

import { TouristService } from './tourist.service';

describe('TouristService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristService = TestBed.get(TouristService);
    expect(service).toBeTruthy();
  });
});
