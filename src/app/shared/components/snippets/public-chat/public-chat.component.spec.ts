import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicChatComponent } from './public-chat.component';

describe('PublicChatComponent', () => {
  let component: PublicChatComponent;
  let fixture: ComponentFixture<PublicChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
