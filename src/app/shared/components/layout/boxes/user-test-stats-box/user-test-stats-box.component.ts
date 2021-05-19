import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { StatsFacade } from '@core/ngrx/stats/stats.facade';
import { TestStats, UserStats } from '@shared/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { TestFacade } from '@store/test/test.facade';

@Component({
  selector: 'app-user-test-stats-box',
  templateUrl: './user-test-stats-box.component.html',
  styleUrls: ['./user-test-stats-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserTestStatsBoxComponent implements OnInit, OnDestroy {

  stats$: Observable<UserStats[]>;
  questions$: Observable<number>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private statsFacade: StatsFacade,
    private testFacade: TestFacade
  ) { }

  ngOnInit() {
    this.stats$ = this.statsFacade.test$;
    this.questions$ = this.testFacade.questions$;
    this.checkData();
  }

  private checkData(): void {
    this.statsFacade.loaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.statsFacade.get());
  }

  public calculateRate(s: TestStats): string {
    return String(Math.round((s.correct / (s.done * 10)) * 100) + '%');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
