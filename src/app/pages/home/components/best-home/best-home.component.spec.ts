import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestHomeComponent } from './best-home.component';

describe('BestHomeComponent', () => {
  let component: BestHomeComponent;
  let fixture: ComponentFixture<BestHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
