import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTestComponent } from './single-test.component';

describe('SingleTestComponent', () => {
  let component: SingleTestComponent;
  let fixture: ComponentFixture<SingleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
