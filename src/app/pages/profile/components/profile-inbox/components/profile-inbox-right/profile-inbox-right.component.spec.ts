import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInboxRightComponent } from './profile-inbox-right.component';

describe('ProfileInboxRightComponent', () => {
  let component: ProfileInboxRightComponent;
  let fixture: ComponentFixture<ProfileInboxRightComponent>;

  beforeEach(async(() => {
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
