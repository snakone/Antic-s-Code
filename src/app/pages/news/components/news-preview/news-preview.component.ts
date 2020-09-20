import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NewsFacade } from '@store/news/news.facade';
import { News } from '@shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})

export class NewsPreviewComponent implements OnInit, OnDestroy {

  @Input() news: News[];
  private unsubscribe$ = new Subject<void>();

  constructor(private newsFacade: NewsFacade) { }

  ngOnInit(): void {
    this.checkData();
  }

  private checkData(): void {
    this.newsFacade.newsLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => {
       this.newsFacade.get();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
