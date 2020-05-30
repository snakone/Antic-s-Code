import { Directive, HostListener, ElementRef } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[TopButton]'})

export class TopButtonDirective {

  displayed = false;
  button = this.el.nativeElement.style;

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') do() {
    try {
      const scroll = document.documentElement.scrollTop;
      if (scroll > 550 && this.displayed) { return; }
      scroll > 550 ?
      (this.button.display = 'block', this.displayed = true) :
      (this.button.display = 'none', this.displayed = false);
    } catch (err) {
      console.log(err);
     }
  }

}
