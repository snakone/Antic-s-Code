import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfileInfoBoxComponent } from './profile-info-box.component';

describe('ProfileInfoBoxComponent', () => {
  let component: ProfileInfoBoxComponent;
  let fixture: ComponentFixture<ProfileInfoBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
