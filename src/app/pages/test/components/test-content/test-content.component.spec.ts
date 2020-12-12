import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestContentComponent } from './test-content.component';

describe('TestContentComponent', () => {
  let component: TestContentComponent;
  let fixture: ComponentFixture<TestContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
