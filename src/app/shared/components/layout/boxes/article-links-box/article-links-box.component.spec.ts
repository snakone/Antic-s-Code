import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLinksBoxComponent } from './article-links-box.component';

describe('ArticleLinksBoxComponent', () => {
  let component: ArticleLinksBoxComponent;
  let fixture: ComponentFixture<ArticleLinksBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleLinksBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLinksBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
