import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleCardSkeletonComponent } from './article-card-skeleton.component';

describe('ArticleCardSkeletonComponent', () => {
  let component: ArticleCardSkeletonComponent;
  let fixture: ComponentFixture<ArticleCardSkeletonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCardSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
