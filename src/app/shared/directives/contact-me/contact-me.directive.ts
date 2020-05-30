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
  button = this.el.nativeElement.style;
  displayed = false;

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll') do() {
    try {
      const scroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight;
      const difference = window.innerWidth > 993 ? 2000 : 2700;

      if ((
            (height - scroll) < difference ||
            scroll < 100
          ) &&
            !this.displayed
         ) { return; }

      (height - scroll) < difference || scroll < 100 ?
       (this.button.display = 'none', this.displayed = false) :
       (this.button.display = 'block', this.displayed = true);
    } catch (err) {
      console.log(err);
     }
  }

}
