import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPreviewComponent } from './news-preview.component';

describe('NewsPreviewComponent', () => {
  let component: NewsPreviewComponent;
  let fixture: ComponentFixture<NewsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
