import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LastUserBoxComponent } from './last-user-box.component';

describe('LastUserBoxComponent', () => {
  let component: LastUserBoxComponent;
  let fixture: ComponentFixture<LastUserBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LastUserBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
