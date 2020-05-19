import {
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
  AfterViewInit
} from '@angular/core';

import { takeUntil, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[Navbar]' })

export class NavbarDirective implements AfterViewInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private dialog: MatDialog,
    private sheet: MatBottomSheet
  ) { }

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
    const scroll = document.scrollingElement.scrollTop;
    scroll >= 10 || this.dialog.openDialogs.length > 0 ||
                    this.sheet._openedBottomSheetRef ?
    this.renderer.addClass(this.el.nativeElement, 'sticky') :
    this.renderer.removeClass(this.el.nativeElement, 'sticky');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
