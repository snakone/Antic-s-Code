import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHomeListRightComponent } from './features-home-list-right.component';

describe('FeaturesHomeListRightComponent', () => {
  let component: FeaturesHomeListRightComponent;
  let fixture: ComponentFixture<FeaturesHomeListRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesHomeListRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesHomeListRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
