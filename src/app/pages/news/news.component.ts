import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsFacade } from '@store/news/news.facade';
import { NewsService } from '@core/services/news/news.service';
import { News } from '@shared/interfaces/interfaces';

import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit, OnDestroy {

  news$: Observable<News[]>;
  last$: Observable<News[]>;
  viewed$: Observable<News[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private newsSrv: NewsService,
    private newsFacade: NewsFacade
  ) { }

  ngOnInit() {
    this.createObs();
    this.checkData();
  }

  private createObs(): void {
    this.news$ = this.newsFacade.news$;
    this.last$ = this.newsFacade.last$;
    this.viewed$ = this.newsFacade.viewed$;
  }

  private checkData(): void {
    this.newsFacade.viewedAndLastLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => {
       this.newsFacade.getData();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.newsSrv.resetPage();
  }

}
