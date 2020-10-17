import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStatsBoxComponent } from './user-stats-box.component';

describe('UserStatsBoxComponent', () => {
  let component: UserStatsBoxComponent;
  let fixture: ComponentFixture<UserStatsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStatsBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStatsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
