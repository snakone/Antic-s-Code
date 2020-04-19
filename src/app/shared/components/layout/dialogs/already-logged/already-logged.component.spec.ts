import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyLoggedComponent } from './already-logged.component';

describe('AlreadyLoggedComponent', () => {
  let component: AlreadyLoggedComponent;
  let fixture: ComponentFixture<AlreadyLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
