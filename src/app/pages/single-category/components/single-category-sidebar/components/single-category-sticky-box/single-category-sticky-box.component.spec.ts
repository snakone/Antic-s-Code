import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryStickyBoxComponent } from './single-category-sticky-box.component';

describe('SingleCategoryStickyBoxComponent', () => {
  let component: SingleCategoryStickyBoxComponent;
  let fixture: ComponentFixture<SingleCategoryStickyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryStickyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryStickyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
