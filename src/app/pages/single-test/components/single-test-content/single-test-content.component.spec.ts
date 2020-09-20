import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTestContentComponent } from './single-test-content.component';

describe('SingleTestContentComponent', () => {
  let component: SingleTestContentComponent;
  let fixture: ComponentFixture<SingleTestContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTestContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
