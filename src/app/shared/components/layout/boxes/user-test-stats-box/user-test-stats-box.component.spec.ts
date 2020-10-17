import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTestStatsBoxComponent } from './user-test-stats-box.component';

describe('UserTestStatsBoxComponent', () => {
  let component: UserTestStatsBoxComponent;
  let fixture: ComponentFixture<UserTestStatsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTestStatsBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTestStatsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
