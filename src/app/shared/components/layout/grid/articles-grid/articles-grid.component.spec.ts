import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticlesGridComponent } from './articles-grid.component';

describe('ArticlesGridComponent', () => {
  let component: ArticlesGridComponent;
  let fixture: ComponentFixture<ArticlesGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
