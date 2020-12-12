import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboutWorkComponent } from './about-work.component';

describe('AboutWorkComponent', () => {
  let component: AboutWorkComponent;
  let fixture: ComponentFixture<AboutWorkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
