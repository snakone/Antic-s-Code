import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

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
    return this.store.select('articleState')
      .pipe(
        takeUntil(this.unsubscribe$),
        map((res: AppState) => {
        return res.articles.length;
      }));
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
