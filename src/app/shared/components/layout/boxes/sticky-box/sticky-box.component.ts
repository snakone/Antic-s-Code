import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { debounceTime, takeUntil, filter } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'app-sticky-box',
  templateUrl: './sticky-box.component.html',
  styleUrls: ['./sticky-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class StickyBoxComponent implements OnInit, OnDestroy {

  display = true;
  @Input() selector: string;
  @Input() empty: boolean;  //  No Content Above the Box
  private unsubscribe$ = new Subject<void>();

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.subscribeToScroll();
    }, 2000);
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
      const bodyW = window.document.body.clientWidth;
      const div = document.getElementById(this.selector);
      let elementH: number;
      div ? elementH = div.getBoundingClientRect().height : elementH = 0;
      if (bodyW < 985 || elementH < 799) {
        this.display = true;
        return;
      }

      const bodyH = window.document.body.clientHeight;
      const scrollY = window.scrollY;
      this.display = !((scrollY / bodyH) * 100 > 85);  // 84% SCROLL
    } catch (err) {
      console.log(err);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
