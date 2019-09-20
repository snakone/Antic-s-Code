import { Directive, HostListener, ElementRef } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[TopButton]'})

export class TopButtonDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') do() {
    try {
      const button = this.el.nativeElement.style;
      const scroll = document.documentElement.scrollTop;
      scroll > 550 ? button.display = 'block' : button.display = 'none';
    } catch (err) { }
  }

}
