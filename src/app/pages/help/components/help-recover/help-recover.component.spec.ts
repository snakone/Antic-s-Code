import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpRecoverComponent } from './help-recover.component';

describe('HelpRecoverComponent', () => {
  let component: HelpRecoverComponent;
  let fixture: ComponentFixture<HelpRecoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpRecoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
