import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSortBarComponent } from './code-sort-bar.component';

describe('CodeSortBarComponent', () => {
  let component: CodeSortBarComponent;
  let fixture: ComponentFixture<CodeSortBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSortBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
