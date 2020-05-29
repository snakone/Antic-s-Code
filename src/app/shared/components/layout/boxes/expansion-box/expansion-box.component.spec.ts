import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionBoxComponent } from './expansion-box.component';

describe('ExpansionBoxComponent', () => {
  let component: ExpansionBoxComponent;
  let fixture: ComponentFixture<ExpansionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
