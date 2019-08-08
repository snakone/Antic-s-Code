import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryConceptBoxComponent } from './single-category-concept-box.component';

describe('SingleCategoryConceptBoxComponent', () => {
  let component: SingleCategoryConceptBoxComponent;
  let fixture: ComponentFixture<SingleCategoryConceptBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryConceptBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryConceptBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
