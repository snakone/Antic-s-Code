import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategorySidebarComponent } from './single-category-sidebar.component';

describe('SingleCategorySidebarComponent', () => {
  let component: SingleCategorySidebarComponent;
  let fixture: ComponentFixture<SingleCategorySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategorySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
