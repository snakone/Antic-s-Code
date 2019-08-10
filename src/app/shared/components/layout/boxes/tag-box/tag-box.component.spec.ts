import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagBoxComponent } from './tag-box.component';

describe('TagBoxComponent', () => {
  let component: TagBoxComponent;
  let fixture: ComponentFixture<TagBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
