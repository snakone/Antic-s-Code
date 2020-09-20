import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArticlesFacade } from '@store/articles/article.facade';
import { UsersFacade } from '@store/users/users.facade';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit, OnDestroy {

  grid: false;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private userFacade: UsersFacade,
    private articleFacade: ArticlesFacade
  ) { }

  ngOnInit() {
    this.checkData();
  }

  private checkData(): void {
    this.articleFacade.loaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.articleFacade.get());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
