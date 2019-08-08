import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryTabBoxComponent } from './single-category-tab-box.component';

describe('SingleCategoryTabBoxComponent', () => {
  let component: SingleCategoryTabBoxComponent;
  let fixture: ComponentFixture<SingleCategoryTabBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryTabBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryTabBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
