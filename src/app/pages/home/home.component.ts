import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsFacade } from '@store/news/news.facade';
import { ArticlesFacade } from '@store/articles/article.facade';
import { combineLatest, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(
    private articlesFacade: ArticlesFacade,
    private newsFacade: NewsFacade
  ) { }

  ngOnInit() {
    this.checkData();
  }

  private checkData(): void {
    combineLatest([
      this.articlesFacade.dataLoaded$,
      this.newsFacade.dataLoaded$
    ])
     .pipe(
       filter(([a, n]) => !a || !n),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(([a, n]) => {
       if (!a) { this.articlesFacade.getData(); }
       else if (!n) { this.newsFacade.get(); }
     });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
