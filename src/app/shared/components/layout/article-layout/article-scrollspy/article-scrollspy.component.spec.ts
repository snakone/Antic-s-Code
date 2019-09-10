import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleScrollspyComponent } from './article-scrollspy.component';

describe('ArticleScrollspyComponent', () => {
  let component: ArticleScrollspyComponent;
  let fixture: ComponentFixture<ArticleScrollspyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleScrollspyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleScrollspyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
