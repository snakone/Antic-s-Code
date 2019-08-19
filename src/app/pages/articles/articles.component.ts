import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit, OnDestroy {

  articles: Article[];
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getArticles();
   }

  private getArticles(): void {
    this.store.select('articleState')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: AppState) => {
        if (res.search) {
          this.articles = res.articles
            .filter((x: Article) => x.title.toLowerCase().includes(res.search) || null);
          return;
        }
        this.articles = res.articles;
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(ArticleActions.SeachArticles({value: null}));
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
