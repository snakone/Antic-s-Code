import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateComponent } from './collaborate.component';

describe('CollaborateComponent', () => {
  let component: CollaborateComponent;
  let fixture: ComponentFixture<CollaborateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
