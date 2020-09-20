import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPreviewCardComponent } from './news-preview-card.component';

describe('NewsPreviewCardComponent', () => {
  let component: NewsPreviewCardComponent;
  let fixture: ComponentFixture<NewsPreviewCardComponent>;

  beforeEach(async(() => {
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
