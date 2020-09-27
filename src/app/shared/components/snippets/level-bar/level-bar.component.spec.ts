import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelBarComponent } from './level-bar.component';

describe('LevelBarComponent', () => {
  let component: LevelBarComponent;
  let fixture: ComponentFixture<LevelBarComponent>;

  beforeEach(async(() => {
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
