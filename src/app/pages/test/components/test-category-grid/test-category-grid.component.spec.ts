import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCategoryGridComponent } from './test-category-grid.component';

describe('TestCategoryGridComponent', () => {
  let component: TestCategoryGridComponent;
  let fixture: ComponentFixture<TestCategoryGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCategoryGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCategoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
