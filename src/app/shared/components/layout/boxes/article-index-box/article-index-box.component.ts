import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Index } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-article-index-box',
  templateUrl: './article-index-box.component.html',
  styleUrls: ['./article-index-box.component.scss']
})

export class ArticleIndexBoxComponent implements OnInit, OnDestroy {

  @Input() index: Index;
  @Input() mobile: boolean;
  private unsubscribe$ = new Subject<void>();

  constructor() { }

  ngOnInit() {
    // this.spyScroll();
  }

  scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

  // private spyScroll(): void {
  //   if (this.mobile) { return; }
  //   this.scrollSpy.hasEntered
  //     .pipe(takeUntil(this.unsubscribe$))
  //     .subscribe((res: Index) => {
  //       this.spySection = res;
  //   });
  // }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
