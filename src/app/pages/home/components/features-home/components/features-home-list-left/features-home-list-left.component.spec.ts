import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHomeListLeftComponent } from './features-home-list-left.component';

describe('FeaturesHomeListLeftComponent', () => {
  let component: FeaturesHomeListLeftComponent;
  let fixture: ComponentFixture<FeaturesHomeListLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesHomeListLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesHomeListLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
