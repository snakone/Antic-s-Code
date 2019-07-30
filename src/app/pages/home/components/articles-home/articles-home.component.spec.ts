import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHomeComponent } from './articles-home.component';

describe('ArticlesHomeComponent', () => {
  let component: ArticlesHomeComponent;
  let fixture: ComponentFixture<ArticlesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
