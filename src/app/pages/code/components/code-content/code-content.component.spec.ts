import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeContentComponent } from './code-content.component';

describe('CodeContentComponent', () => {
  let component: CodeContentComponent;
  let fixture: ComponentFixture<CodeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
