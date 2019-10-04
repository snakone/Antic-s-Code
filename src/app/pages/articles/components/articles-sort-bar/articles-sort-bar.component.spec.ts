import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSortBarComponent } from './articles-sort-bar.component';

describe('ArticlesSortBarComponent', () => {
  let component: ArticlesSortBarComponent;
  let fixture: ComponentFixture<ArticlesSortBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesSortBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
