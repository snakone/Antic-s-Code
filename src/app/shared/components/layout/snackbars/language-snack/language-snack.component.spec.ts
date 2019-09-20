import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSnackComponent } from './language-snack.component';

describe('LanguageSnackComponent', () => {
  let component: LanguageSnackComponent;
  let fixture: ComponentFixture<LanguageSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
