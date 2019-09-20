import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-sticky-box',
  templateUrl: './sticky-box.component.html',
  styleUrls: ['./sticky-box.component.scss']
})

export class StickyBoxComponent implements OnInit, OnDestroy {

  display = true;
  @Input() selector: string;
  @Input() code: boolean;
  private unsubscribe$ = new Subject<void>();

  constructor() { }

  ngOnInit() {
    fromEvent(window, 'scroll').pipe(debounceTime(100))
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe(() => this.onScroll());
  }

  private onScroll(): void {
    const w = window.document.body.clientWidth;
    if (w < 985) {
      this.display = true;
      return;
    }

    const h = window.document.body.clientHeight;
    const s = window.scrollY;
    this.display = !((s / h) * 100 > 85);  // 90% SCROLL
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
