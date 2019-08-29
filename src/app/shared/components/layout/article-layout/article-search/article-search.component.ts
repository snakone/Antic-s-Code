import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as ArticleActions from '@core/ngrx/actions/article.actions';
import { ArticleService } from '@core/services/article/article.service';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss']
})

export class ArticleSearchComponent implements OnInit, OnDestroy {

  value: string;
  valueChanged: Subject<string> = new Subject<string>();
  private unsubscribe$ = new Subject<void>();

  constructor() { }

  ngOnInit() {
    this.subscribeToChanges();
  }

  private subscribeToChanges(): void {
    this.valueChanged
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((change: string) => console.log(change));
  }

  changed(value: string): void {
    this.valueChanged.next(value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
