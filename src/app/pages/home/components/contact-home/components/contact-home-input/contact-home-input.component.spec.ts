import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHomeInputComponent } from './contact-home-input.component';

describe('ContactHomeInputComponent', () => {
  let component: ContactHomeInputComponent;
  let fixture: ComponentFixture<ContactHomeInputComponent>;

  beforeEach(async(() => {
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
