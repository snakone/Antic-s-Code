import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LikedHomeComponent } from './liked-home.component';

describe('LikedHomeComponent', () => {
  let component: LikedHomeComponent;
  let fixture: ComponentFixture<LikedHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
