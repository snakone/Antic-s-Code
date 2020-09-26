import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsContentComponent } from './news-content.component';

describe('NewsContentComponent', () => {
  let component: NewsContentComponent;
  let fixture: ComponentFixture<NewsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
