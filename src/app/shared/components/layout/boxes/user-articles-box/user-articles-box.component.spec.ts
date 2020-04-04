import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserArticlesBoxComponent } from './user-articles-box.component';

describe('UserArticlesBoxComponent', () => {
  let component: UserArticlesBoxComponent;
  let fixture: ComponentFixture<UserArticlesBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserArticlesBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserArticlesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
