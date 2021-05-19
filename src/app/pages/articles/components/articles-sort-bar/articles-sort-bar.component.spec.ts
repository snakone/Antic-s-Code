import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticlesSortBarComponent } from './articles-sort-bar.component';

describe('ArticlesSortBarComponent', () => {
  let component: ArticlesSortBarComponent;
  let fixture: ComponentFixture<ArticlesSortBarComponent>;

  beforeEach(waitForAsync(() => {
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
