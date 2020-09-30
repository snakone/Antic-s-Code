import { Component, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '@core/storage/storage.service';
import { ArticleService } from '@core/services/article/article.service';
import { Article } from '@shared/interfaces/interfaces';
import { ArticlesFacade } from '@store/articles/article.facade';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit, OnDestroy {

  grid: boolean;
  private unsubscribe$ = new Subject<void>();
  articles$: Observable<Article[]>;
  count$: Observable<number>;

  constructor(
    private articleSrv: ArticleService,
    private articleFacade: ArticlesFacade,
    private ls: StorageService
  ) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.articleFacade.articles$;
    this.grid = this.ls.get('visual');
  }

  private checkData(): void {
    this.articleFacade.loaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.articleFacade.get());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articleSrv.resetPage();
    this.articleFacade.reset();
  }

}
