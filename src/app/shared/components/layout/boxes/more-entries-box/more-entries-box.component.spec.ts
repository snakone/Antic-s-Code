import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreEntriesBoxComponent } from './more-entries-box.component';

describe('MoreEntriesBoxComponent', () => {
  let component: MoreEntriesBoxComponent;
  let fixture: ComponentFixture<MoreEntriesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreEntriesBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreEntriesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
