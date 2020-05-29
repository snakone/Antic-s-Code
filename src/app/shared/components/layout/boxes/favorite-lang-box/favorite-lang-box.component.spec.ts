import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteLangBoxComponent } from './favorite-lang-box.component';

describe('FavoriteLangBoxComponent', () => {
  let component: FavoriteLangBoxComponent;
  let fixture: ComponentFixture<FavoriteLangBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteLangBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteLangBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
