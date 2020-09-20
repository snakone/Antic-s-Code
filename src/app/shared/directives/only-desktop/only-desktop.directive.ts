import {
  Directive,
  ViewContainerRef,
  AfterViewInit,
  OnDestroy,
  TemplateRef,
  Output,
  EventEmitter
} from '@angular/core';

import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil, map, distinctUntilChanged } from 'rxjs/operators';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[onlyDesktop]'})

export class OnlyDesktopDirective implements AfterViewInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  @Output() orientation = new EventEmitter<string>();

  constructor(
    private viewRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngAfterViewInit(): void {
    this.subscribeToResize();
    window.dispatchEvent(new Event('resize'));
  }

  private subscribeToResize(): void {
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(100),
        map((e: Event) => this.checkWidth(e.target as Window)),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
    .subscribe(res => this.showOrHide(res));
  }

  private showOrHide(desktop: boolean): void {
    this.viewRef.clear();
    if (desktop) {
      this.orientation.emit('desktop');
      this.viewRef.createEmbeddedView(this.templateRef);
    }
  }

  private checkWidth(e: Window): boolean {
    return e.innerWidth > 993 ? true : false;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
