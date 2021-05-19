import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MostActiveBoxComponent } from './most-active-box.component';

describe('MostActiveBoxComponent', () => {
  let component: MostActiveBoxComponent;
  let fixture: ComponentFixture<MostActiveBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostActiveBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostActiveBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
