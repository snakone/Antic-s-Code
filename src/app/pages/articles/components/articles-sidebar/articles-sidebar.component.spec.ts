import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSidebarComponent } from './articles-sidebar.component';

describe('ArticlesSidebarComponent', () => {
  let component: ArticlesSidebarComponent;
  let fixture: ComponentFixture<ArticlesSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
