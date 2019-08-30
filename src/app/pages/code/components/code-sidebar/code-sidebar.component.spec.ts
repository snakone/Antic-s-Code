import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSidebarComponent } from './code-sidebar.component';

describe('CodeSidebarComponent', () => {
  let component: CodeSidebarComponent;
  let fixture: ComponentFixture<CodeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
