import { TestBed } from '@angular/core/testing';

import { ScrollspyService } from './scrollspy.service';

describe('ScrollspyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollspyService = TestBed.get(ScrollspyService);
    expect(service).toBeTruthy();
  });
});
