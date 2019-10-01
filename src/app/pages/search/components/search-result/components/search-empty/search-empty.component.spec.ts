import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEmptyComponent } from './search-empty.component';

describe('SearchEmptyComponent', () => {
  let component: SearchEmptyComponent;
  let fixture: ComponentFixture<SearchEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
