import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBoxComponent } from './index-box.component';

describe('IndexBoxComponent', () => {
  let component: IndexBoxComponent;
  let fixture: ComponentFixture<IndexBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
