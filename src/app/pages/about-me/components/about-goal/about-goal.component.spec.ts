import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutGoalComponent } from './about-goal.component';

describe('AboutGoalComponent', () => {
  let component: AboutGoalComponent;
  let fixture: ComponentFixture<AboutGoalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
