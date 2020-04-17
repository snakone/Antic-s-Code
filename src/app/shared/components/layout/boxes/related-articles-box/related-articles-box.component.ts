import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Category, ArticleResponse, Article } from '@app/shared/interfaces/interfaces';
import { ArticleService } from '@app/core/services/article/article.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Router } from '@angular/router';
import * as SearchActions from '@core/ngrx/actions/search.actions';

@Component({
  selector: 'app-related-articles-box',
  templateUrl: './related-articles-box.component.html',
  styleUrls: ['./related-articles-box.component.scss']
})

export class RelatedArticlesBoxComponent implements OnInit, OnDestroy {

  @Input() category: Category;
  articles: Article[];
  private unsubscribe$ = new Subject<void>();

  constructor(private articleService: ArticleService,
              private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
    this.getRelatedArticles();
  }

  private getRelatedArticles(): void {
    this.articleService.getArticlesByCategory(this.category.category)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: ArticleResponse) => {
      if (res.ok) {
        this.articles = res.articles;
      }
    });
  }

  seeMore(): void {
    this.store.dispatch(SearchActions
      .searchContent({
        request: {
          value: this.category.category.toLowerCase()
        }
      }));
    this.router.navigateByUrl('/search');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
