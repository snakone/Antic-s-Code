import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from '@core/services/article/article.service';
import { Subject } from 'rxjs';
import { Article, ArticleResponse } from '@app/shared/interfaces/interfaces';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {

  articles: Article[];
  private unsubscribe$ = new Subject<void>();

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getArticles(): void {
    this.articleService.getArticles()
    .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: ArticleResponse) => {
      if (res.ok) { this.articles = res.articles; }
    });
  }

}
