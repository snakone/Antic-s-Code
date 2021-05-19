import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InboxCardComponent } from './inbox-card.component';

describe('InboxCardComponent', () => {
  let component: InboxCardComponent;
  let fixture: ComponentFixture<InboxCardComponent>;

  // tslint:disable-next-line: deprecation
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InboxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
