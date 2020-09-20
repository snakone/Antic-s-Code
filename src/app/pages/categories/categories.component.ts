import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticlesFacade } from '@store/articles/article.facade';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(private articlesFacade: ArticlesFacade) { }

  ngOnInit() {
    this.checkData();
  }

  private checkData(): void {
    this.articlesFacade.byCategoryCountLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => this.articlesFacade.getData());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
