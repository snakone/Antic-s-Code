import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryHeaderLeftComponent } from './single-category-header-left.component';

describe('SingleCategoryHeaderLeftComponent', () => {
  let component: SingleCategoryHeaderLeftComponent;
  let fixture: ComponentFixture<SingleCategoryHeaderLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryHeaderLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryHeaderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
