import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTopButton]'
})

export class TopButtonDirective {

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') do() {
    const button = this.el.nativeElement.style;
    const scroll = document.documentElement.scrollTop;
    scroll > 550 ? button.display = 'block' : button.display = 'none';
  }

}
