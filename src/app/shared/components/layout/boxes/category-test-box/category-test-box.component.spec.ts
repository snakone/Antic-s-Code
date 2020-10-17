import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTestBoxComponent } from './category-test-box.component';

describe('CategoryTestBoxComponent', () => {
  let component: CategoryTestBoxComponent;
  let fixture: ComponentFixture<CategoryTestBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryTestBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTestBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
