import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesRelatedBoxComponent } from './articles-related-box.component';

describe('ArticlesRelatedBoxComponent', () => {
  let component: ArticlesRelatedBoxComponent;
  let fixture: ComponentFixture<ArticlesRelatedBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesRelatedBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesRelatedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
