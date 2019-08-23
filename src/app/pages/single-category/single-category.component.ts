import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as AppActions from '@core/ngrx/actions/app.actions';

import { Category } from '@app/shared/interfaces/interfaces';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})

export class SingleCategoryComponent implements OnInit, OnDestroy {

  category: Category;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.getArticleByName();
  }

  private getArticleByName(): void {
    const store$ = this.store.select('AppState');
    const route$ = this.route.params;
    // tslint:disable-next-line: deprecation
    combineLatest(store$, route$)
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([s, r]: any) => {
        if (s.search) { return; }
        this.category = null;
        setTimeout(() => {
          this.category = s.categories
            .filter((x: Category) => x.category === r.name)[0] || null;
        }, 500);
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(AppActions.SeachArticles({value: null}));
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
