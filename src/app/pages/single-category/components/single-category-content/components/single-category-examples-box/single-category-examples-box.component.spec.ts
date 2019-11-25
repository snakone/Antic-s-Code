import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryExamplesBoxComponent } from './single-category-examples-box.component';

describe('SingleCategoryExamplesBoxComponent', () => {
  let component: SingleCategoryExamplesBoxComponent;
  let fixture: ComponentFixture<SingleCategoryExamplesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryExamplesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryExamplesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
