import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxSearchComponent } from './inbox-search.component';

describe('InboxSearchComponent', () => {
  let component: InboxSearchComponent;
  let fixture: ComponentFixture<InboxSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InboxSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InboxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
