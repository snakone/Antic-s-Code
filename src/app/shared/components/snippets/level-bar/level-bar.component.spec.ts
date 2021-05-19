import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LevelBarComponent } from './level-bar.component';

describe('LevelBarComponent', () => {
  let component: LevelBarComponent;
  let fixture: ComponentFixture<LevelBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
