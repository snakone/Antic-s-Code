import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsGridCardComponent } from './news-grid-card.component';

describe('NewsGridCardComponent', () => {
  let component: NewsGridCardComponent;
  let fixture: ComponentFixture<NewsGridCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsGridCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
