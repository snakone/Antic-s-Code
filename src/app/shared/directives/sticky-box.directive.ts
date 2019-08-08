import { Directive, ElementRef, Renderer2, OnDestroy } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appStickyBox]'
})

export class StickyBoxDirective implements OnDestroy {

    height: number;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    this.makeSticky();
    fromEvent(window, 'resize').pipe(debounceTime(1000)).subscribe(() => this.makeSticky());
   }

  private makeSticky(): void {
    setTimeout(() => {
    if (!this.height) { this.height = this.el.nativeElement.getBoundingClientRect().height; }
    const width = window.document.body.clientWidth;
    const section = document.getElementById('category-section').getBoundingClientRect().height;
    const top = this.el.nativeElement.getBoundingClientRect().top + window.scrollY;
    this.setElementHeight(this.height, width, section, top);
    }, 2000);
  }

  private setElementHeight(h: number, w: number, s: number, t: number): void {
    const el = this.el.nativeElement;
    if (w < 985) {
     this.renderer.setStyle(el, 'height', `100%`);
     return;
    }
    this.renderer.setStyle(el, 'height', `${s - t + h - 46}px`);
  }

  ngOnDestroy(): void {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'height', `100%`);
    this.renderer.removeClass(el, 'display');
  }

}
