import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReactionsComponent } from './article-reactions.component';

describe('ArticleReactionsComponent', () => {
  let component: ArticleReactionsComponent;
  let fixture: ComponentFixture<ArticleReactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleReactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
