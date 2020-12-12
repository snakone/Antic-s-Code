import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestimonialHomeComponent } from './testimonial-home.component';

describe('TestimonialHomeComponent', () => {
  let component: TestimonialHomeComponent;
  let fixture: ComponentFixture<TestimonialHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
