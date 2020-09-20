import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesFacade } from '@store/articles/article.facade';

import { Article } from '@shared/interfaces/interfaces';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})

export class SingleArticleComponent implements OnInit, OnDestroy {

  article$: Observable<Article>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private articleFacade: ArticlesFacade
  ) { }

  ngOnInit() {
    this.getArticleBySlug();
    this.article$ = this.articleFacade.bySlug$;
  }

  private getArticleBySlug(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => this.articleFacade.getBySlug(params.slug));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articleFacade.resetBySlug();
  }

}
