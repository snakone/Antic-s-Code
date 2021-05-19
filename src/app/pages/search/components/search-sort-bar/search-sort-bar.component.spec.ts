import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchSortBarComponent } from './search-sort-bar.component';

describe('SearchSortBarComponent', () => {
  let component: SearchSortBarComponent;
  let fixture: ComponentFixture<SearchSortBarComponent>;

  beforeEach(waitForAsync(() => {
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
