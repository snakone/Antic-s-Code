import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestHomeGridComponent } from './best-home-grid.component';

describe('BestHomeGridComponent', () => {
  let component: BestHomeGridComponent;
  let fixture: ComponentFixture<BestHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestHomeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
