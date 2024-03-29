import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileContentComponent } from './profile-content.component';

describe('ProfileContentComponent', () => {
  let component: ProfileContentComponent;
  let fixture: ComponentFixture<ProfileContentComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
