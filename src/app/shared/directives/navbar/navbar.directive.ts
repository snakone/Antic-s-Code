import { Directive, ElementRef, OnDestroy, Renderer2, AfterViewInit } from '@angular/core';
import { takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[Navbar]' })

export class NavbarDirective implements AfterViewInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
    this.listenScroll();
  }

  listenScroll(): void {
    fromEvent(window, 'scroll')
      .pipe(
        takeUntil(this.unsubscribe$),
        distinctUntilChanged()
      )
      .subscribe(() => this.onScroll());
  }

  private onScroll(): void {
    const scroll = document.scrollingElement.scrollTop;
    scroll >= 10 || this.dialog.openDialogs.length > 0 ?
    this.renderer.addClass(this.el.nativeElement, 'sticky') :
    this.renderer.removeClass(this.el.nativeElement, 'sticky');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
