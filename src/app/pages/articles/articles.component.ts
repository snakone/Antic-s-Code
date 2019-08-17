import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit, OnDestroy {

  articles$: Observable<Article[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getArticles();
   }

  private getArticles(): void {
    this.articles$ = this.store.select('articleState')
      .pipe(map((res: AppState) => {
      if (res.search) {
        return res.articles
          .filter((x: Article) => x.title.toLowerCase().includes(res.search) || null);
      }
      return res.articles;
    }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(ArticleActions.SeachArticles({value: null}));
  }

}
