import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHomeComponent } from './features-home.component';

describe('FeaturesHomeComponent', () => {
  let component: FeaturesHomeComponent;
  let fixture: ComponentFixture<FeaturesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
