import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as fromArticles from '@core/ngrx/selectors/article.selectors';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { Observable, Subject } from 'rxjs';
import { Article, User } from '@shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { takeUntil, filter } from 'rxjs/operators';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-user-articles-box',
  templateUrl: './user-articles-box.component.html',
  styleUrls: ['./user-articles-box.component.scss']
})

export class UserArticlesBoxComponent implements OnInit, OnDestroy {

  @Input() user: User;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();
  page = 1;
  itemsPerPage = 5;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.store.select(fromArticles.getByUser);
  }

  private checkData(): void {
    this.store.select(fromArticles.getByUserLoaded)
     .pipe(
       filter(res => !res && !!this.user?._id),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => {
         this.store.dispatch(
           ArticleActions.getByUser({id: this.user._id})
         );
    });
  }

  public changeFrom(page: number): void {
    this.page = page;
    this.scroll('user-articles');
  }

  private scroll(id: string): void {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(ArticleActions.resetByUser());
  }

}
