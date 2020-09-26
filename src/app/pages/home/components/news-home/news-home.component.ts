import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsFacade } from '@store/news/news.facade';
import { News } from '@shared/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})

export class NewsHomeComponent implements OnInit, OnDestroy {

  news$: Observable<News[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private newsFacade: NewsFacade) { }

  ngOnInit(): void {
    this.checkData();
    this.news$ = this.newsFacade.viewed$;
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
  }

}
