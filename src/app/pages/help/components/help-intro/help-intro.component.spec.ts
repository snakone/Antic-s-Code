import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpIntroComponent } from './help-intro.component';

describe('HelpIntroComponent', () => {
  let component: HelpIntroComponent;
  let fixture: ComponentFixture<HelpIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
