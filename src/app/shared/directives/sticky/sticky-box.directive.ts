import { Directive, ElementRef, Renderer2, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';

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
    this.checkCodeLoaded();
    this.subscribeToResize();
  }

  private checkCodeLoaded(): void {
    this.store.select(fromArticles.getLoadedArticles)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: boolean) => {
        if (res) {
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
    let div: number;

    if (!this.selector || !el) { return; }

    const section = document.getElementById(this.selector);
    section ? div = section.getBoundingClientRect().height : div = 1;

    const width = window.document.body.clientWidth;

    if (width < 985 || div === 1 || this.height === 0) {
      this.renderer.setStyle(el, 'height', `auto`);
      return;
    }

    try {
      this.setElementHeight(div, el);
    } catch (err) {}
  }

  private setElementHeight(d: number, el: any): void {
    this.renderer.setStyle(el, 'height', `${d}px`);
  }

  ngOnDestroy(): void {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'height', `auto`);
    this.renderer.removeClass(el, 'display');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
