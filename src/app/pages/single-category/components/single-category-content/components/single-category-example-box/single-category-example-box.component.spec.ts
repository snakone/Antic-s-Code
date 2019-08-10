import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryExampleBoxComponent } from './single-category-example-box.component';

describe('SingleCategoryExampleBoxComponent', () => {
  let component: SingleCategoryExampleBoxComponent;
  let fixture: ComponentFixture<SingleCategoryExampleBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryExampleBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryExampleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
