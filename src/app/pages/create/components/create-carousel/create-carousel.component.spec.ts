import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateCarouselComponent } from './create-carousel.component';

describe('CreateCarouselComponent', () => {
  let component: CreateCarouselComponent;
  let fixture: ComponentFixture<CreateCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
