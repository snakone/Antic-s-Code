import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LikedHomeGridComponent } from './liked-home-grid.component';

describe('LikedHomeGridComponent', () => {
  let component: LikedHomeGridComponent;
  let fixture: ComponentFixture<LikedHomeGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedHomeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
