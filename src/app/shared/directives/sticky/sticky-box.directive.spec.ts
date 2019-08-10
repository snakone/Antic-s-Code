import { StickyBoxDirective } from './sticky-box.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('StickyBoxDirective', () => {
  it('should create an instance', () => {
    // tslint:disable: prefer-const
    let el: ElementRef;
    let render: Renderer2;
    const directive = new StickyBoxDirective(el, render);
    expect(directive).toBeTruthy();
  });
});
