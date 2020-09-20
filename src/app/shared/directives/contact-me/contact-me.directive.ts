import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { Subject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[ContactMe]'})

export class ContactMeDirective implements AfterViewInit, OnDestroy {

  @Output() show = new EventEmitter<void>();
  button = this.el.nativeElement;
  displayed = false;
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
      const height = document.documentElement.scrollHeight;
      const difference = window.innerWidth > 993 ? 2000 : 2700;

      if ((
            (height - scroll) < difference ||
            scroll < 100
          ) &&
            !this.displayed
         ) return;

       (height - scroll) < difference || scroll < 100 ?
       (this.button.style.display = 'none', this.displayed = false) :
       (this.button.style.display = 'block', this.displayed = true);

       scroll > 550 && this.displayed ? this.toggle() : this.untoggle();
    } catch (err) {
      console.log(err);
     }
  }

  private toggle(): void {
    this.button.classList.add('moveUp');
  }

  private untoggle(): void {
    this.button.classList.remove('moveUp');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
