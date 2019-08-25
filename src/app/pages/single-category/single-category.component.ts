import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Category } from '@app/shared/interfaces/interfaces';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil} from 'rxjs/operators';
import * as fromCategories from '@core/ngrx/selectors/category.selectors';

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
    this.getCategoryByName();
  }

  private getCategoryByName(): void {
    const store$ = this.store.select(fromCategories.getAllCategories);
    const route$ = this.route.params;
    combineLatest([store$, route$])
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe(([s, r]: any) => {
      this.category = null;
      setTimeout(() => {
        this.category = s
          .filter((x: Category) => x.category === r.name)[0] || null;
      }, 500);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
