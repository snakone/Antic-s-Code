import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSidebarComponent } from './test-sidebar.component';

describe('TestSidebarComponent', () => {
  let component: TestSidebarComponent;
  let fixture: ComponentFixture<TestSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
