import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHomeComponent } from './carousel-home.component';

describe('CarouselHomeComponent', () => {
  let component: CarouselHomeComponent;
  let fixture: ComponentFixture<CarouselHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
