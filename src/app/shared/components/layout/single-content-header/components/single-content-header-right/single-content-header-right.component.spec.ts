import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleCategoryHeaderRightComponent } from './single-category-header-right.component';

describe('SingleCategoryHeaderRightComponent', () => {
  let component: SingleCategoryHeaderRightComponent;
  let fixture: ComponentFixture<SingleCategoryHeaderRightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryHeaderRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryHeaderRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
