import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionsComponent } from './conditions.component';

describe('ConditionsComponent', () => {
  let component: ConditionsComponent;
  let fixture: ComponentFixture<ConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
