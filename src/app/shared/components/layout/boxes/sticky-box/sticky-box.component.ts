import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { debounceTime, takeUntil, filter } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-sticky-box',
  templateUrl: './sticky-box.component.html',
  styleUrls: ['./sticky-box.component.scss']
})

export class StickyBoxComponent implements OnInit, OnDestroy {

  display = true;
  @Input() selector: string;
  @Input() empty: boolean;  //  No Content Above the Box
  private unsubscribe$ = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.subscribeToScroll();
  }

  private subscribeToScroll(): void {
    if (this.empty) { return; }
    fromEvent(window, 'scroll')
    .pipe(
      takeUntil(this.unsubscribe$),
      filter(res => !!res && !!this.selector),
      debounceTime(100)
    )
    .subscribe(() => this.onScroll());
  }

  private onScroll(): void {
    try {
      const width = window.document.body.clientWidth;
      const div = document.getElementById(this.selector)
                          .getBoundingClientRect().height;

      if (width < 985 || div < 799) {
        this.display = true;
        return;
      }

      const height = window.document.body.clientHeight;
      const scroll = window.scrollY;
      this.display = !((scroll / height) * 100 > 84);  // 84% SCROLL
    } catch(err) {
      console.log(err);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
