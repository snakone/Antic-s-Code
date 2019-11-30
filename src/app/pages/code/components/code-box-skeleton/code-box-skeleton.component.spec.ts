import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBoxSkeletonComponent } from './code-box-skeleton.component';

describe('CodeBoxSkeletonComponent', () => {
  let component: CodeBoxSkeletonComponent;
  let fixture: ComponentFixture<CodeBoxSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBoxSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBoxSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
