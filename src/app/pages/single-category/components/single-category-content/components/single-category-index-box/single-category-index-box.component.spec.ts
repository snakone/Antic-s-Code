import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryIndexBoxComponent } from './single-category-index-box.component';

describe('SingleCategoryIndexBoxComponent', () => {
  let component: SingleCategoryIndexBoxComponent;
  let fixture: ComponentFixture<SingleCategoryIndexBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryIndexBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryIndexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
