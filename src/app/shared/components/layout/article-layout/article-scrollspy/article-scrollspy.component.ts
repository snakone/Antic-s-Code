import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Index, ScrollSpy } from '@app/shared/interfaces/interfaces';
import { ScrollSpyService } from '../services/scrollspy.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-article-scrollspy',
  templateUrl: './article-scrollspy.component.html',
  styleUrls: ['./article-scrollspy.component.scss']
})

export class ArticleScrollspyComponent implements OnInit, OnDestroy {

  @Input() index: Index;
  @Input() mobile: boolean;
  private unsubscribe$ = new Subject<void>();
  spySection: ScrollSpy = {};

  constructor(private scrollSpy: ScrollSpyService) { }

  ngOnInit() {
    this.spyScroll();
  }

  scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
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
