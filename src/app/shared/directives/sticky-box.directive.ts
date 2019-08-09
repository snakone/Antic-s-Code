import { Directive, ElementRef, Renderer2, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appStickyBox]'
})

export class StickyBoxDirective implements AfterViewInit, OnDestroy {

  height: number;
  @Input() selector: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) { }

  ngAfterViewInit(): void {
     this.makeSticky();
     fromEvent(window, 'resize').pipe(debounceTime(1000)).subscribe(() => this.makeSticky());
  }

  private makeSticky(): void {
    const width = window.document.body.clientWidth;
    const el = this.el.nativeElement;
    if (width < 985) { this.renderer.setStyle(el, 'height', `100%`); return; }

    setTimeout(() => {
      if (!this.height) { this.height = this.el.nativeElement.getBoundingClientRect().height; }
      const section = document.getElementById(this.selector).getBoundingClientRect().height;
      const top = this.el.nativeElement.getBoundingClientRect().top + window.scrollY;
      this.setElementHeight(this.height, section, top, el);
    }, 3000);
  }

  private setElementHeight(h: number, s: number, t: number, el: any): void {
    this.renderer.setStyle(el, 'height', `${s - t + h - 46}px`);
  }

  ngOnDestroy(): void {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'height', `100%`);
    this.renderer.removeClass(el, 'display');
  }

}
