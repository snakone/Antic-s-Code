import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUserBoxComponent } from './last-user-box.component';

describe('LastUserBoxComponent', () => {
  let component: LastUserBoxComponent;
  let fixture: ComponentFixture<LastUserBoxComponent>;

  beforeEach(async(() => {
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
