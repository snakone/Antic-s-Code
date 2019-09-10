import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Category } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil, distinctUntilChanged} from 'rxjs/operators';
import * as fromCategories from '@core/ngrx/selectors/category.selectors';
import * as CategoryActions from '@core/ngrx/actions/category.actions';

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
    this.getCategoryById();
  }

  private getCategoryById(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        this.store.dispatch(CategoryActions.getCategoryByName({ name: params.name }));
    });

    this.store.select(fromCategories.getCategoryByName)
      .pipe(
        takeUntil(this.unsubscribe$),
        distinctUntilChanged())
      .subscribe((res: Category) => {
        if (res) {
          this.category = null;
          setTimeout(() => { this.category = res; }, 400);
        }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
