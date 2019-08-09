import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyBoxComponent } from './sticky-box.component';

describe('StickyBoxComponent', () => {
  let component: StickyBoxComponent;
  let fixture: ComponentFixture<StickyBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
