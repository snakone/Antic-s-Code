import { Directive, EventEmitter, ElementRef, Output, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[scrollable]'
})

export class ScrollingDirective {

  @Output() scrollPosition = new EventEmitter<boolean>();

  constructor(public el: ElementRef) { }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    try {
      const top = event.target.scrollTop;
      const height = this.el.nativeElement.scrollHeight;
      const offset = this.el.nativeElement.offsetHeight;

      if (top > height - offset - 1) {
        this.scrollPosition.emit(true);
      }
    } catch (err) {}
  }

}
