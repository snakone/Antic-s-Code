import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineComponent } from './time-line.component';

describe('TimeLineComponent', () => {
  let component: TimeLineComponent;
  let fixture: ComponentFixture<TimeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
