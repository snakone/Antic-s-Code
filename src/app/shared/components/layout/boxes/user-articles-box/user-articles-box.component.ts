import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

import { ArticlesFacade } from '@store/articles/article.facade';
import { Article, User } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-user-articles-box',
  templateUrl: './user-articles-box.component.html',
  styleUrls: ['./user-articles-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserArticlesBoxComponent implements OnInit, OnDestroy {

  @Input() user: User;
  @Input() title: string;
  articles$: Observable<Article[]>;
  private unsubscribe$ = new Subject<void>();
  page = 1;
  itemsPerPage = 6;

  constructor(private articlesFacade: ArticlesFacade) { }

  ngOnInit() {
    this.checkData();
    this.articles$ = this.articlesFacade.byUser$;
  }

  private checkData(): void {
    this.articlesFacade.byUserLoaded$
     .pipe(
       filter(res => !res && !!this.user?._id),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => this.articlesFacade.getByUser(this.user._id));
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
    this.articlesFacade.resetByUser();
  }

}
