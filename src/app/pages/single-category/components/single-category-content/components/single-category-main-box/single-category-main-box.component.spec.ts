import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryMainBoxComponent } from './single-category-main-box.component';

describe('SingleCategoryMainBoxComponent', () => {
  let component: SingleCategoryMainBoxComponent;
  let fixture: ComponentFixture<SingleCategoryMainBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryMainBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryMainBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
