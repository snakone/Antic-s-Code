import { Component, OnInit, OnDestroy } from '@angular/core';
import { MostActive } from '@shared/interfaces/interfaces';
import { Subject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { takeUntil, filter } from 'rxjs/operators';

import * as UserActions from '@core/ngrx/actions/user.actions';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';

@Component({
  selector: 'app-users-sidebar',
  templateUrl: './users-sidebar.component.html',
  styleUrls: ['./users-sidebar.component.scss']
})

export class UsersSidebarComponent implements OnInit, OnDestroy {

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
