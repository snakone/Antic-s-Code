import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ArticlesFacade } from '@core/ngrx/facade/article.facade';
import { SearchFacade } from '@core/ngrx/facade/search.facade';

import { Category, Article } from '@shared/interfaces/interfaces';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-related-articles-box',
  templateUrl: './related-articles-box.component.html',
  styleUrls: ['./related-articles-box.component.scss']
})

export class RelatedArticlesBoxComponent implements OnInit, OnDestroy {

  @Input() category: Category;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private articleFacade: ArticlesFacade,
    private searchFacade: SearchFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.articleFacade.byCategory$;
  }

  private checkData(): void {
    this.articleFacade.byCategoryLoaded$
     .pipe(
       filter(res => !res && !!this.category),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => this.articleFacade.getByCategory(this.category.category));
  }

  public seeMore(): void {
    this.searchFacade.search({value: this.category.category});
    this.router.navigateByUrl('/search');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articleFacade.resetByCategory();
  }

}
