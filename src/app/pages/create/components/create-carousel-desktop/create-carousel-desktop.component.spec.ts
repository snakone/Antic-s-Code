import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateCarouselDesktopComponent } from './create-carousel-desktop.component';

describe('CreateCarouselDesktopComponent', () => {
  let component: CreateCarouselDesktopComponent;
  let fixture: ComponentFixture<CreateCarouselDesktopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCarouselDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarouselDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
