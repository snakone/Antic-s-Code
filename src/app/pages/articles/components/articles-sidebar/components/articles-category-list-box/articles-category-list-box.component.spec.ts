import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesCategoryListBoxComponent } from './articles-category-list-box.component';

describe('ArticlesCategoryListBoxComponent', () => {
  let component: ArticlesCategoryListBoxComponent;
  let fixture: ComponentFixture<ArticlesCategoryListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesCategoryListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesCategoryListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
