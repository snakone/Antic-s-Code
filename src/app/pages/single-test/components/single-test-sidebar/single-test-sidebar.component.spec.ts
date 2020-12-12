import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleTestSidebarComponent } from './single-test-sidebar.component';

describe('SingleTestSidebarComponent', () => {
  let component: SingleTestSidebarComponent;
  let fixture: ComponentFixture<SingleTestSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTestSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTestSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
