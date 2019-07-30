import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesHomeListComponent } from './features-home-list.component';

describe('FeaturesHomeListComponent', () => {
  let component: FeaturesHomeListComponent;
  let fixture: ComponentFixture<FeaturesHomeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesHomeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesHomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
