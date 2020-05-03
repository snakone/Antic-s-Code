import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Category } from '@shared/interfaces/interfaces';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromCategories from '@core/ngrx/selectors/category.selectors';
import * as CategoryActions from '@core/ngrx/actions/category.actions';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})

export class SingleCategoryComponent implements OnInit, OnDestroy {

  category$: Observable<Category>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.category$ = this.store.select(fromCategories.getByName);
    this.getCategoryByName();
  }

  private getCategoryByName(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        this.store.dispatch(
          CategoryActions.getByName({ name: params.name })
        );
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(CategoryActions.reset());
  }

}
