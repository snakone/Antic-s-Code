import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryContentComponent } from './single-category-content.component';

describe('SingleCategoryContentComponent', () => {
  let component: SingleCategoryContentComponent;
  let fixture: ComponentFixture<SingleCategoryContentComponent>;

  beforeEach(async(() => {
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
