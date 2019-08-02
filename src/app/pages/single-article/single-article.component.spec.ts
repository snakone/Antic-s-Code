import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleComponent } from './single-article.component';

describe('SingleArticleComponent', () => {
  let component: SingleArticleComponent;
  let fixture: ComponentFixture<SingleArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
