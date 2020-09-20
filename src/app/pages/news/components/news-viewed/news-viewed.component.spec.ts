import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsViewedComponent } from './news-viewed.component';

describe('NewsViewedComponent', () => {
  let component: NewsViewedComponent;
  let fixture: ComponentFixture<NewsViewedComponent>;

  beforeEach(async(() => {
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
