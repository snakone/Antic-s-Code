import { Component, OnInit, OnDestroy } from '@angular/core';

import { ArticlesFacade } from '@core/ngrx/facade/article.facade';

import { Subject, Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Article } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-liked-home',
  templateUrl: './liked-home.component.html',
  styleUrls: ['./liked-home.component.scss']
})

export class LikedHomeComponent implements OnInit, OnDestroy {

  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private articleFacade: ArticlesFacade) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.articleFacade.mostLiked$;
  }

  private checkData(): void {
    this.articleFacade.mostLikedLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.articleFacade.getLiked());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
