import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsPreviewCardComponent } from './news-preview-card.component';

describe('NewsPreviewCardComponent', () => {
  let component: NewsPreviewCardComponent;
  let fixture: ComponentFixture<NewsPreviewCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPreviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
