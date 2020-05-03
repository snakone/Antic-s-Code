import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleInComponent } from './google-in.component';

describe('GoogleInComponent', () => {
  let component: GoogleInComponent;
  let fixture: ComponentFixture<GoogleInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
