import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsContentComponent } from './single-news-content.component';

describe('SingleNewsContentComponent', () => {
  let component: SingleNewsContentComponent;
  let fixture: ComponentFixture<SingleNewsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleNewsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
