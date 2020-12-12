import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleCategorySidebarComponent } from './single-category-sidebar.component';

describe('SingleCategorySidebarComponent', () => {
  let component: SingleCategorySidebarComponent;
  let fixture: ComponentFixture<SingleCategorySidebarComponent>;

  beforeEach(waitForAsync(() => {
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
