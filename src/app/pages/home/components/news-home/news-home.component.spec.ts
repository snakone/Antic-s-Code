import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHomeComponent } from './news-home.component';

describe('NewsHomeComponent', () => {
  let component: NewsHomeComponent;
  let fixture: ComponentFixture<NewsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
