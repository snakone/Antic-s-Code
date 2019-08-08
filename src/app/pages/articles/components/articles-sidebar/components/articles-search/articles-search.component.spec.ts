import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesSearchComponent } from './articles-search.component';

describe('ArticlesSearchComponent', () => {
  let component: ArticlesSearchComponent;
  let fixture: ComponentFixture<ArticlesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
