import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileInboxLeftComponent } from './profile-inbox-left.component';

describe('ProfileInboxLeftComponent', () => {
  let component: ProfileInboxLeftComponent;
  let fixture: ComponentFixture<ProfileInboxLeftComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInboxLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInboxLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
