import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoBoxComponent } from './profile-info-box.component';

describe('ProfileInfoBoxComponent', () => {
  let component: ProfileInfoBoxComponent;
  let fixture: ComponentFixture<ProfileInfoBoxComponent>;

  beforeEach(async(() => {
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
