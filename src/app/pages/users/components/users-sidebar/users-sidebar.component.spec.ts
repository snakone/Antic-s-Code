import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSidebarComponent } from './users-sidebar.component';

describe('UsersSidebarComponent', () => {
  let component: UsersSidebarComponent;
  let fixture: ComponentFixture<UsersSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
