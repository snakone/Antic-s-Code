import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListBoxComponent } from './admin-list-box.component';

describe('AdminListBoxComponent', () => {
  let component: AdminListBoxComponent;
  let fixture: ComponentFixture<AdminListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
