import { TopButtonDirective } from './top-button.directive';
import { ElementRef } from '@angular/core';

describe('TopButtonDirective', () => {
  it('should create an instance', () => {
    // tslint:disable-next-line:prefer-const
    let el: ElementRef;
    const directive = new TopButtonDirective(el);
    expect(directive).toBeTruthy();
  });
});
