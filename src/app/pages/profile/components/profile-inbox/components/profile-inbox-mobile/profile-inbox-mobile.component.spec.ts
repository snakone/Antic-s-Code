import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInboxMobileComponent } from './profile-inbox-mobile.component';

describe('ProfileInboxMobileComponent', () => {
  let component: ProfileInboxMobileComponent;
  let fixture: ComponentFixture<ProfileInboxMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileInboxMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInboxMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
