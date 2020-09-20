import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarShowComponent } from './star-show.component';

describe('StarShowComponent', () => {
  let component: StarShowComponent;
  let fixture: ComponentFixture<StarShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
