import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsPreviewSkeletonComponent } from './news-preview-skeleton.component';

describe('NewsPreviewSkeletonComponent', () => {
  let component: NewsPreviewSkeletonComponent;
  let fixture: ComponentFixture<NewsPreviewSkeletonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPreviewSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPreviewSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
