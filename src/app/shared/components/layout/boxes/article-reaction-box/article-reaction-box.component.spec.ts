import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReactionBoxComponent } from './article-reaction-box.component';

describe('ArticleReactionBoxComponent', () => {
  let component: ArticleReactionBoxComponent;
  let fixture: ComponentFixture<ArticleReactionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleReactionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleReactionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
