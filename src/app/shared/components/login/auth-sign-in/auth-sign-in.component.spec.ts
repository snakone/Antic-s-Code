import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignInComponent } from './auth-sign-in.component';

describe('AuthSignInComponent', () => {
  let component: AuthSignInComponent;
  let fixture: ComponentFixture<AuthSignInComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
