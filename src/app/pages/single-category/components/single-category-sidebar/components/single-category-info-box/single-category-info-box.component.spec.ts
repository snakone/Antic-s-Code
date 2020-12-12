import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleCategoryInfoBoxComponent } from './single-category-info-box.component';

describe('SingleCategoryInfoBoxComponent', () => {
  let component: SingleCategoryInfoBoxComponent;
  let fixture: ComponentFixture<SingleCategoryInfoBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
