import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIntroComponent } from './create-intro.component';

describe('CreateIntroComponent', () => {
  let component: CreateIntroComponent;
  let fixture: ComponentFixture<CreateIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
