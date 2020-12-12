import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleCategorySkeletonComponent } from './single-category-skeleton.component';

describe('SingleCategorySkeletonComponent', () => {
  let component: SingleCategorySkeletonComponent;
  let fixture: ComponentFixture<SingleCategorySkeletonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategorySkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategorySkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
