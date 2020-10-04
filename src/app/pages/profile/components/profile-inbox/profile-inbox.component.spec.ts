import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInboxComponent } from './profile-inbox.component';

describe('ProfileInboxComponent', () => {
  let component: ProfileInboxComponent;
  let fixture: ComponentFixture<ProfileInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
