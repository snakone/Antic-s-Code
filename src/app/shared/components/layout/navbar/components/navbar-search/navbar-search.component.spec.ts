import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavBarSearchComponent } from './navbar-search.component';

describe('NavBarSearchComponent', () => {
  let component: NavBarSearchComponent;
  let fixture: ComponentFixture<NavBarSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
