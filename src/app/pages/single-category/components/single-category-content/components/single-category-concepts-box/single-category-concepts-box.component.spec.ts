import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryConceptsBoxComponent } from './single-category-concepts-box.component';

describe('SingleCategoryConceptsBoxComponent', () => {
  let component: SingleCategoryConceptsBoxComponent;
  let fixture: ComponentFixture<SingleCategoryConceptsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryConceptsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryConceptsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
