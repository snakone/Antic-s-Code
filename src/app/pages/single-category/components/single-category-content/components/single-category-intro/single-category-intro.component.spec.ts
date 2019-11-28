import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryIntroComponent } from './single-category-intro.component';

describe('SingleCategoryIntroComponent', () => {
  let component: SingleCategoryIntroComponent;
  let fixture: ComponentFixture<SingleCategoryIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
