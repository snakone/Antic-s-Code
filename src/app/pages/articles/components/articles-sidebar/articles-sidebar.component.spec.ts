import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticlesSidebarComponent } from './articles-sidebar.component';

describe('ArticlesSidebarComponent', () => {
  let component: ArticlesSidebarComponent;
  let fixture: ComponentFixture<ArticlesSidebarComponent>;

  beforeEach(waitForAsync(() => {
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
