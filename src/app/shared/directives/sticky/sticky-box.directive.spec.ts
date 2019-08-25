import { StickyBoxDirective } from './sticky-box.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

describe('StickyBoxDirective', () => {
  it('should create an instance', () => {
    // tslint:disable: prefer-const
    let el: ElementRef;
    let render: Renderer2;
    let store: Store<AppState>;
    const directive = new StickyBoxDirective(el, render, store);
    expect(directive).toBeTruthy();
  });
});
