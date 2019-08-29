import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { AppState } from '@app/app.config';
import { Article } from '@app/shared/interfaces/interfaces';
import * as fromCode from '@core/ngrx/selectors/code.selectors';


@Component({
  selector: 'app-articles-grid',
  templateUrl: './articles-grid.component.html',
  styleUrls: ['./articles-grid.component.scss']
})

export class ArticlesGridComponent implements OnInit, OnDestroy {

  total: Observable<number>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.total = this.getTotalPost();
  }

  getTotalPost(): Observable<number> {
    return this.store.select(fromCode.getArticlesCount)
     .pipe(takeUntil(this.unsubscribe$));
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
