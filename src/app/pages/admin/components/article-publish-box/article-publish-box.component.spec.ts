import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePublishBoxComponent } from './article-publish-box.component';

describe('ArticlePublishBoxComponent', () => {
  let component: ArticlePublishBoxComponent;
  let fixture: ComponentFixture<ArticlePublishBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePublishBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePublishBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
