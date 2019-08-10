import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleCommentsComponent } from './single-article-comments.component';

describe('SingleArticleCommentsComponent', () => {
  let component: SingleArticleCommentsComponent;
  let fixture: ComponentFixture<SingleArticleCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
