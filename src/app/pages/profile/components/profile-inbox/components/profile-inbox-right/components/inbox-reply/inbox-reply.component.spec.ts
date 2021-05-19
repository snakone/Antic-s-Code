import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxReplyComponent } from './inbox-reply.component';

describe('InboxReplyComponent', () => {
  let component: InboxReplyComponent;
  let fixture: ComponentFixture<InboxReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxReplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
