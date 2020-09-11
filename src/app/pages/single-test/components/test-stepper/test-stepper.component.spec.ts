import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestStepperComponent } from './test-stepper.component';

describe('TestStepperComponent', () => {
  let component: TestStepperComponent;
  let fixture: ComponentFixture<TestStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
