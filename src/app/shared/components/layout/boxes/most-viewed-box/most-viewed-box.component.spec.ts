import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MostViewedBoxComponent } from './most-viewed-box.component';

describe('MostViewedBoxComponent', () => {
  let component: MostViewedBoxComponent;
  let fixture: ComponentFixture<MostViewedBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostViewedBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostViewedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
