import { TestBed } from '@angular/core/testing';

import { SwipeMenuService } from './swipe-menu.service';

describe('SwipeMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwipeMenuService = TestBed.get(SwipeMenuService);
    expect(service).toBeTruthy();
  });
});
