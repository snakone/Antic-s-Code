import { Directive, ElementRef, Renderer2, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';

@Directive({
  selector: '[appStickyBox]'
})

export class StickyBoxDirective implements AfterViewInit, OnDestroy {

  height: number;
  private unsubscribe$ = new Subject<void>();
  @Input() selector: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private store: Store<AppState>) { }

  ngAfterViewInit(): void {
    this.checkCode();
    this.subscribeToResize();
  }

  private checkCode(): void {
    this.store.select('articleState')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: AppState) => {
        if (res.loaded) {
          setTimeout(() => {
            this.makeSticky();
          }, 200);
        }
    });
  }

  private subscribeToResize(): void {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(100),
        takeUntil(this.unsubscribe$)
      )
    .subscribe(() => this.makeSticky());
  }

  private makeSticky(): void {
    const el = this.el.nativeElement;

    if (!this.selector) { return; }
    if (!this.height) { this.height = el.getBoundingClientRect().height; }

    const section = document.getElementById(this.selector).getBoundingClientRect().height;
    const width = window.document.body.clientWidth;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const padding = 50;

    if (width < 985 || section === 1) { this.renderer.setStyle(el, 'height', `auto`); return; }

    try {
      this.setElementHeight(this.height, section, top, el, padding);
    } catch (err) {}
  }

  private setElementHeight(h: number, s: number, t: number, el: any, p: number): void {
    this.renderer.setStyle(el, 'height', `${s - t + h - p}px`);
  }

  ngOnDestroy(): void {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'height', `auto`);
    this.renderer.removeClass(el, 'display');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
