import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleCardBadgesComponent } from './article-card-badges.component';

describe('ArticleCardBadgesComponent', () => {
  let component: ArticleCardBadgesComponent;
  let fixture: ComponentFixture<ArticleCardBadgesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCardBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
