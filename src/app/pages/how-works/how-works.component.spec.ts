import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorksComponent } from './how-works.component';

describe('HowWorksComponent', () => {
  let component: HowWorksComponent;
  let fixture: ComponentFixture<HowWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
