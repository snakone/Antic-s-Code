import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsSidebarComponent } from './single-news-sidebar.component';

describe('SingleNewsSidebarComponent', () => {
  let component: SingleNewsSidebarComponent;
  let fixture: ComponentFixture<SingleNewsSidebarComponent>;

  beforeEach(async(() => {
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
