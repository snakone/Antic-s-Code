import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MostActive } from '@app/shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { takeUntil, filter } from 'rxjs/operators';

import * as UserActions from '@core/ngrx/actions/user.actions';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';

@Component({
  selector: 'app-most-active-users',
  templateUrl: './most-active-users.component.html',
  styleUrls: ['./most-active-users.component.scss']
})

export class MostActiveUsersComponent implements OnInit, OnDestroy {

  activeUsers$: Observable<MostActive[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
   this.checkData();
   this.activeUsers$ = this.store.select(fromUsers.getMostActive);
  }

  private checkData(): void {
    this.store.select(fromUsers.getMostActiveLoaded)
     .pipe(
       takeUntil(this.unsubscribe$),
       filter(res => !res)
      )
     .subscribe(_ => {
       this.store.dispatch(
         UserActions.getMostActive()
      )
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
