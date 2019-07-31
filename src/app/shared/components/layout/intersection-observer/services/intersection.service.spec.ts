import { TestBed } from '@angular/core/testing';

import { IntersectionService } from './intersection.service';

describe('IntersectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntersectionService = TestBed.get(IntersectionService);
    expect(service).toBeTruthy();
  });
});
