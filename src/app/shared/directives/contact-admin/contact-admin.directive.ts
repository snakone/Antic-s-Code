import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[ContactAdmin]'})

export class ContactAdminDirective implements AfterViewInit, OnDestroy {

  displayed = false;
  button = this.el.nativeElement.classList;
  private unsubscribe$ = new Subject<void>();

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.listenScroll();
  }

  private listenScroll(): void {
    fromEvent(window, 'scroll')
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe(() => this.onScroll());
  }

  private onScroll(): void {
    try {
      const scroll = document.documentElement.scrollTop;
      if (scroll > 550 && this.displayed || scroll < 550 && !this.displayed) return;
      scroll > 550 ? this.displayed = true : this.displayed = false;
    } catch (err) {
      console.log(err);
     }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
