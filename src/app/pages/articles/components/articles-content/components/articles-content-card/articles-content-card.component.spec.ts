import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesContentCardComponent } from './articles-content-card.component';

describe('ArticlesContentCardComponent', () => {
  let component: ArticlesContentCardComponent;
  let fixture: ComponentFixture<ArticlesContentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesContentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
