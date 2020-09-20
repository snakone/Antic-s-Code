import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHomeGridComponent } from './news-home-grid.component';

describe('NewsHomeGridComponent', () => {
  let component: NewsHomeGridComponent;
  let fixture: ComponentFixture<NewsHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsHomeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
