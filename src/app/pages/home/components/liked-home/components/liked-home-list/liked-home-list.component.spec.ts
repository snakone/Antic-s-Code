import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedHomeListComponent } from './liked-home-list.component';

describe('LikedHomeListComponent', () => {
  let component: LikedHomeListComponent;
  let fixture: ComponentFixture<LikedHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
