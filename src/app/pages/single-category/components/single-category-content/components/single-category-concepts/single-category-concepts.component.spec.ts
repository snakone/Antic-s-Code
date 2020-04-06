import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryConceptsComponent } from './single-category-concepts.component';

describe('SingleCategoryConceptsComponent', () => {
  let component: SingleCategoryConceptsComponent;
  let fixture: ComponentFixture<SingleCategoryConceptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryConceptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
