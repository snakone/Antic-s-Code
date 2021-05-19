import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxWelcomeComponent } from './inbox-welcome.component';

describe('InboxWelcomeComponent', () => {
  let component: InboxWelcomeComponent;
  let fixture: ComponentFixture<InboxWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
