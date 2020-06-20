import { Directive, HostListener, ElementRef } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[ContactAdmin]'})

export class ContactAdminDirective {

  displayed = false;
  button = this.el.nativeElement.classList;

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') do() {
    try {
      const scroll = document.documentElement.scrollTop;
      if (scroll > 550 && this.displayed || scroll < 550 && !this.displayed) { return; }
      scroll > 550 ?
      (this.displayed = true) :
      (this.displayed = false);
    } catch (err) {
      console.log(err);
     }
  }

}
