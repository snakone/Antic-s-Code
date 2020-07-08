import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAdminComponent } from './contact-admin.component';

describe('ContactAdminComponent', () => {
  let component: ContactAdminComponent;
  let fixture: ComponentFixture<ContactAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
