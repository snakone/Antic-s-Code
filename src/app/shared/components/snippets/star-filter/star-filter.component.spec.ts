import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFilterComponent } from './star-filter.component';

describe('StarFilterComponent', () => {
  let component: StarFilterComponent;
  let fixture: ComponentFixture<StarFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
