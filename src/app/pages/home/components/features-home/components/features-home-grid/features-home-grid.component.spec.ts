import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHomeGridComponent } from './features-home-grid.component';

describe('FeaturesHomeGridComponent', () => {
  let component: FeaturesHomeGridComponent;
  let fixture: ComponentFixture<FeaturesHomeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesHomeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesHomeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
