import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIntroMobileComponent } from './create-intro-mobile.component';

describe('CreateIntroMobileComponent', () => {
  let component: CreateIntroMobileComponent;
  let fixture: ComponentFixture<CreateIntroMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIntroMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIntroMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
