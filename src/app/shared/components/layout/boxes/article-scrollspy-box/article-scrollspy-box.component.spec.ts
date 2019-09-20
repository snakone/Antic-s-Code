import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleScrollspyBoxComponent } from './article-scrollspy-box.component';

describe('ArticleScrollspyBoxComponent', () => {
  let component: ArticleScrollspyBoxComponent;
  let fixture: ComponentFixture<ArticleScrollspyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleScrollspyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleScrollspyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
