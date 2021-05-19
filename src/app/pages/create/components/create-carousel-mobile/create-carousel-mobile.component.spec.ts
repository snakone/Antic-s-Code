import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarouselMobileComponent } from './create-carousel-mobile.component';

describe('CreateCarouselMobileComponent', () => {
  let component: CreateCarouselMobileComponent;
  let fixture: ComponentFixture<CreateCarouselMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCarouselMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarouselMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
