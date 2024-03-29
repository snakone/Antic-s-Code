import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RelatedNewsCardComponent } from './related-news-card.component';

describe('RelatedNewsCardComponent', () => {
  let component: RelatedNewsCardComponent;
  let fixture: ComponentFixture<RelatedNewsCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedNewsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
