import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleNewsSidebarComponent } from './single-news-sidebar.component';

describe('SingleNewsSidebarComponent', () => {
  let component: SingleNewsSidebarComponent;
  let fixture: ComponentFixture<SingleNewsSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNewsSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
