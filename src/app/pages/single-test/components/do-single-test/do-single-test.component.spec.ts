import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoSingleTestComponent } from './do-single-test.component';

describe('DoSingleTestComponent', () => {
  let component: DoSingleTestComponent;
  let fixture: ComponentFixture<DoSingleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoSingleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoSingleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
