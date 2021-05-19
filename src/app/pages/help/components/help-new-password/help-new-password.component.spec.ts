import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpNewPasswordComponent } from './help-new-password.component';

describe('HelpNewPasswordComponent', () => {
  let component: HelpNewPasswordComponent;
  let fixture: ComponentFixture<HelpNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpNewPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
