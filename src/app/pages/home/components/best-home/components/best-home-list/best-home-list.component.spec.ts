import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestHomeListComponent } from './best-home-list.component';

describe('BestHomeListComponent', () => {
  let component: BestHomeListComponent;
  let fixture: ComponentFixture<BestHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
