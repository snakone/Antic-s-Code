import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleShareComponent } from './single-article-share.component';

describe('SingleArticleShareComponent', () => {
  let component: SingleArticleShareComponent;
  let fixture: ComponentFixture<SingleArticleShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
