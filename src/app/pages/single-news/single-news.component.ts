import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsFacade } from '@app/core/ngrx/news/news.facade';
import { News } from '@app/shared/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})

export class SingleNewsComponent implements OnInit, OnDestroy {

  notice$: Observable<News>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private newsFacade: NewsFacade
  ) { }

  ngOnInit() {
    this.getNoticeBySlug();
    this.notice$ = this.newsFacade.bySlug$;
  }

  private getNoticeBySlug(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => this.newsFacade.getBySlug(params.slug));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.newsFacade.resetBySlug();
  }

}
