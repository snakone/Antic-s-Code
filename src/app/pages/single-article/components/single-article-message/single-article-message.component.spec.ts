import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleMessageComponent } from './single-article-message.component';

describe('SingleArticleMessageComponent', () => {
  let component: SingleArticleMessageComponent;
  let fixture: ComponentFixture<SingleArticleMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleArticleMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleArticleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
