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
  @Input() code: boolean;

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private store: Store<AppState>) { }

  ngAfterViewInit(): void {
    this.checkArticlesLoaded();
    this.subscribeToResize();
  }

  private checkArticlesLoaded(): void {
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
    let padding = 34;
    let height = el.offsetHeight;

    if (this.code) { height = 16; padding = 0; }
    if (!this.selector || !el || height === 0) { return; }
    if (!this.height) { this.height = height; }

    const section = document.getElementById(this.selector);
    section ? div = section.getBoundingClientRect().height : div = 1;
    const width = window.document.body.clientWidth;

    if (width < 985 || div === 1) {
      this.renderer.setStyle(el, 'height', `auto`);
      return;
    }

    try {
      this.setElementHeight(div, this.height, padding, el);
    } catch (err) {}
  }

  private setElementHeight(d: number, h: number, p: number, el: any): void {
    this.renderer.setStyle(el, 'height', `${d - h + p}px`);
  }

  ngOnDestroy(): void {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'height', `auto`);
    this.renderer.removeClass(el, 'display');
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
