import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { StatsFacade } from '@app/core/ngrx/stats/stats.facade';
import { UserStats } from '@app/shared/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users-score-box',
  templateUrl: './users-score-box.component.html',
  styleUrls: ['./users-score-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UsersScoreBoxComponent implements OnInit, OnDestroy {

  stats$: Observable<UserStats[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private statsFacade: StatsFacade) { }

  ngOnInit(): void {
    this.stats$ = this.statsFacade.stats$;
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
