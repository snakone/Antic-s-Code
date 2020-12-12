import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticlesContentComponent } from './articles-content.component';

describe('ArticlesContentComponent', () => {
  let component: ArticlesContentComponent;
  let fixture: ComponentFixture<ArticlesContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
