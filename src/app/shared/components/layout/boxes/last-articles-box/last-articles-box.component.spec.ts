import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastArticlesBoxComponent } from './last-articles-box.component';

describe('LastArticlesBoxComponent', () => {
  let component: LastArticlesBoxComponent;
  let fixture: ComponentFixture<LastArticlesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastArticlesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastArticlesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
