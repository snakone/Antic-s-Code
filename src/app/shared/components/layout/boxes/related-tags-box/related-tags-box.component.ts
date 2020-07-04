import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';

import { ArticlesFacade } from '@core/ngrx/facade/article.facade';
import { SearchFacade } from '@core/ngrx/facade/search.facade';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-related-tags-box',
  templateUrl: './related-tags-box.component.html',
  styleUrls: ['./related-tags-box.component.scss']
})

export class RelatedTagsBoxComponent implements OnInit, OnDestroy {

  @Input() article: Article;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private articlesFacade: ArticlesFacade,
    private searchFacade: SearchFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.articlesFacade.byTags$;
  }

  private checkData(): void {
    this.articlesFacade.byTagsLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => this.articlesFacade.getByTags(
        { id: this.article._id, tags: this.article.tags }
      ));
  }

  public seeMore(): void {
    this.searchFacade.search({value: '', tags: this.article.tags});
    this.router.navigateByUrl('/search');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.articlesFacade.resetByTags();
  }

}
