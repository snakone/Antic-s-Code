import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostActiveUsersComponent } from './most-active-users.component';

describe('MostActiveUsersComponent', () => {
  let component: MostActiveUsersComponent;
  let fixture: ComponentFixture<MostActiveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostActiveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
