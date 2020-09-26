import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsFacade } from '@store/news/news.facade';
import { ArticlesFacade } from '@store/articles/article.facade';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(private articlesFacade: ArticlesFacade) { }

  ngOnInit() {
    this.checkData();
  }

  private checkData(): void {
    this.articlesFacade.dataLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => {
       this.articlesFacade.getData();
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
