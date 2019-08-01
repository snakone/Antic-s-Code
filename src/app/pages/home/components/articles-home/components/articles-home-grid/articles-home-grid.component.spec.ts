import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesHomeGridComponent } from './articles-home-grid.component';

describe('ArticlesHomeGridComponent', () => {
  let component: ArticlesHomeGridComponent;
  let fixture: ComponentFixture<ArticlesHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesHomeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
