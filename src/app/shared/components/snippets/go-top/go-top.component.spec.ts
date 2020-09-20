import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoTopComponent } from './go-top.component';

describe('GoTopComponent', () => {
  let component: GoTopComponent;
  let fixture: ComponentFixture<GoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
