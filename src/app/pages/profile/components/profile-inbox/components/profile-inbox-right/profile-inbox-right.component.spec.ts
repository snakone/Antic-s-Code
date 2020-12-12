import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileInboxRightComponent } from './profile-inbox-right.component';

describe('ProfileInboxRightComponent', () => {
  let component: ProfileInboxRightComponent;
  let fixture: ComponentFixture<ProfileInboxRightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInboxRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInboxRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
