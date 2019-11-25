import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Index, ScrollSpy } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrollSpyService } from '../../article-layout/services/scrollspy.service';

@Component({
  selector: 'app-article-scrollspy-box',
  templateUrl: './article-scrollspy-box.component.html',
  styleUrls: ['./article-scrollspy-box.component.scss']
})

export class ArticleScrollspyBoxComponent implements OnInit, OnDestroy {

  @Input() index: Index;
  @Input() mobile: boolean;
  private unsubscribe$ = new Subject<void>();
  spySection: ScrollSpy = {};

  constructor(private scrollSpy: ScrollSpyService) { }

  ngOnInit() {
    // this.spyScroll();
  }

  scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

  private spyScroll(): void {
    if (this.mobile) { return; }
    this.scrollSpy.hasEntered
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ScrollSpy) => {
        this.spySection = res;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
