import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectionObserverComponent } from './intersection-observer.component';

describe('IntersectionObserverComponent', () => {
  let component: IntersectionObserverComponent;
  let fixture: ComponentFixture<IntersectionObserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntersectionObserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectionObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
