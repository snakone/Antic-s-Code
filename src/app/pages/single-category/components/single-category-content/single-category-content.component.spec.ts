import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleCategoryContentComponent } from './single-category-content.component';

describe('SingleCategoryContentComponent', () => {
  let component: SingleCategoryContentComponent;
  let fixture: ComponentFixture<SingleCategoryContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
