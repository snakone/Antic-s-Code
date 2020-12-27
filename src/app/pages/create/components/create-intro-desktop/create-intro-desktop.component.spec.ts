import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateIntroDesktopComponent } from './create-intro-desktop.component';

describe('CreateIntroDesktopComponent', () => {
  let component: CreateIntroDesktopComponent;
  let fixture: ComponentFixture<CreateIntroDesktopComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIntroDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIntroDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
