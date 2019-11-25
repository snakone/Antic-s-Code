import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryIntroBoxComponent } from './single-category-intro-box.component';

describe('SingleCategoryIntroBoxComponent', () => {
  let component: SingleCategoryIntroBoxComponent;
  let fixture: ComponentFixture<SingleCategoryIntroBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryIntroBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryIntroBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
