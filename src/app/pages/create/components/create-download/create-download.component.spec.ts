import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDownloadComponent } from './create-download.component';

describe('CreateDownloadComponent', () => {
  let component: CreateDownloadComponent;
  let fixture: ComponentFixture<CreateDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
