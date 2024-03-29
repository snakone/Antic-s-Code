import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticlesHomeComponent } from './articles-home.component';

describe('ArticlesHomeComponent', () => {
  let component: ArticlesHomeComponent;
  let fixture: ComponentFixture<ArticlesHomeComponent>;

  beforeEach(waitForAsync(() => {
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
