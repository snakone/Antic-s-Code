import {
  Directive,
  HostListener,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[ContactMe]'})

export class ContactMeDirective {

  @Output() show = new EventEmitter<void>();

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') do() {
    try {
      const button = this.el.nativeElement.style;
      const scroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight;

      const difference = window.innerWidth > 993 ? 2000 : 2700;

      (height - scroll) < difference || scroll < 100 ?
       button.display = 'none' :
       button.display = 'block';
    } catch (err) {
      console.log(err);
     }
  }

}
