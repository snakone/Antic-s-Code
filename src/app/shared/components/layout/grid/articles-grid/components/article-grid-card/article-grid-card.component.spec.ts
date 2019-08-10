import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGridCardComponent } from './article-grid-card.component';

describe('ArticleGridCardComponent', () => {
  let component: ArticleGridCardComponent;
  let fixture: ComponentFixture<ArticleGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleGridCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
