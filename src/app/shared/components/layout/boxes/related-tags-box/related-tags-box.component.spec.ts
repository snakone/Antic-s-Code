import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTagsBoxComponent } from './related-tags-box.component';

describe('RelatedTagsBoxComponent', () => {
  let component: RelatedTagsBoxComponent;
  let fixture: ComponentFixture<RelatedTagsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedTagsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedTagsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
