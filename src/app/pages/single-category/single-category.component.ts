import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '@shared/interfaces/interfaces';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CategoryFacade } from '@core/ngrx/facade/category.facade';

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
    private categoryFacade: CategoryFacade
  ) { }

  ngOnInit() {
    this.category$ = this.categoryFacade.byName$;
    this.getCategoryByName();
  }

  private getCategoryByName(): void {
    this.route.params
     .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => this.categoryFacade.getByName(params.name));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.categoryFacade.reset();
  }

}
