import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinksBoxComponent } from './links-box.component';

describe('LinksBoxComponent', () => {
  let component: LinksBoxComponent;
  let fixture: ComponentFixture<LinksBoxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
