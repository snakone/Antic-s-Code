import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsViewedComponent } from './news-viewed.component';

describe('NewsViewedComponent', () => {
  let component: NewsViewedComponent;
  let fixture: ComponentFixture<NewsViewedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsViewedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
