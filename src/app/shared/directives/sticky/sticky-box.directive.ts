import {
  Directive,
  ElementRef,
  Renderer2,
  OnDestroy,
  AfterViewInit,
  Input
} from '@angular/core';

import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[StickyBox]'})

export class StickyBoxDirective implements AfterViewInit, OnDestroy {

  @Input() selector: string;
  @Input() empty: boolean;  // No Content Above the Box?
  private unsubscribe$ = new Subject<void>();
  height: number;
  element = this.el.nativeElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.startSticky();
    this.subscribeToResize();
  }

  private startSticky(): void {
    setTimeout(() => { this.makeSticky(); }, 2000); // Wait Content to Load
  }

  private subscribeToResize(): void {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(500),
        takeUntil(this.unsubscribe$)
      )
    .subscribe(() => this.makeSticky());
  }

  private makeSticky(): void {
    let height = this.element.offsetHeight;
    if (!this.element || height === 0) return;

    const width = window.document.body.clientWidth;
    if (width < 985) {  // 992px - Scrollbar 8px
      this.setAutoHeight(this.element);
      return;
    }

    let div: number;
    let padding = 214;  // If Content Above the Box

    if (this.empty) height = 32; padding = 0;  // 32 = 2rem
    if (!this.height) this.height = height;

    const section = document.getElementById(this.selector);
    section ? div = section.getBoundingClientRect().height - this.element.offsetTop : div = 1;

    if (div === 1) { // No Selector or NOT loaded yet
      this.setAutoHeight(this.element);
      window.dispatchEvent(new Event('resize'));
    }

    if (div - this.height + padding <= 799) {  // Not enough Content
      this.setAutoHeight(this.element);
      return;
     }

    try {
      this.setElementHeight(div, this.height, padding, this.element);
    } catch(err) { console.log(err); }
  }

  private setElementHeight(d: number, h: number, p: number, el: any): void {
    this.renderer.setStyle(el, 'height', `${d - h + p}px`);
  }

  private setAutoHeight(el: any): void {
    this.renderer.setStyle(el, 'height', `auto`);
  }

  ngOnDestroy(): void {
    this.renderer.setStyle(this.element, 'height', `auto`);
    this.renderer.removeClass(this.element, 'display');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
