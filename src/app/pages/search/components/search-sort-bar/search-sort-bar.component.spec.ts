import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSortBarComponent } from './search-sort-bar.component';

describe('SearchSortBarComponent', () => {
  let component: SearchSortBarComponent;
  let fixture: ComponentFixture<SearchSortBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSortBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
