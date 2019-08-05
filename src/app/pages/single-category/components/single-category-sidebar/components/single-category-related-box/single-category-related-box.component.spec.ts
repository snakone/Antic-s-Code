import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryRelatedBoxComponent } from './single-category-related-box.component';

describe('SingleCategoryRelatedBoxComponent', () => {
  let component: SingleCategoryRelatedBoxComponent;
  let fixture: ComponentFixture<SingleCategoryRelatedBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryRelatedBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryRelatedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
