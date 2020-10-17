import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersScoreBoxComponent } from './users-score-box.component';

describe('UsersScoreBoxComponent', () => {
  let component: UsersScoreBoxComponent;
  let fixture: ComponentFixture<UsersScoreBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersScoreBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersScoreBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
