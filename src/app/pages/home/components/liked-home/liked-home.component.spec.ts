import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedHomeComponent } from './liked-home.component';

describe('LikedHomeComponent', () => {
  let component: LikedHomeComponent;
  let fixture: ComponentFixture<LikedHomeComponent>;

  beforeEach(async(() => {
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
