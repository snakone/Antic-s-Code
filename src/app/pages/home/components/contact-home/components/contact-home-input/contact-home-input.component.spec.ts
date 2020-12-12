import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactHomeInputComponent } from './contact-home-input.component';

describe('ContactHomeInputComponent', () => {
  let component: ContactHomeInputComponent;
  let fixture: ComponentFixture<ContactHomeInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactHomeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactHomeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
