import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleCategoryHeaderComponent } from './single-category-header.component';

describe('SingleCategoryHeaderComponent', () => {
  let component: SingleCategoryHeaderComponent;
  let fixture: ComponentFixture<SingleCategoryHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
