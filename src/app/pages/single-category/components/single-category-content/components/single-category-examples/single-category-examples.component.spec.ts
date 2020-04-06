import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryExamplesComponent } from './single-category-examples.component';

describe('SingleCategoryExamplesComponent', () => {
  let component: SingleCategoryExamplesComponent;
  let fixture: ComponentFixture<SingleCategoryExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
