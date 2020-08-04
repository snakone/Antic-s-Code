import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { Test } from '@shared/interfaces/interfaces';
import { TestFacade } from '@store/test/test.facade';

@Component({
  selector: 'app-single-test',
  templateUrl: './single-test.component.html',
  styleUrls: ['./single-test.component.scss']
})

export class SingleTestComponent implements OnInit, OnDestroy {

  test$: Observable<Test>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private testFacade: TestFacade
  ) { }

  ngOnInit(): void {
    this.checkData();
    this.getTestByCategory();
    this.test$ = this.testFacade.byCategory$;
  }

  private getTestByCategory(): void {
    this.route.params
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe(params => this.testFacade.getByCategory(params.category));
  }

  private checkData(): void {
    this.testFacade.entriesByUserLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.testFacade.getEntriesByUser());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
