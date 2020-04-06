import { Component, OnInit, OnDestroy } from '@angular/core';
import { MostActive, MostActiveResponse } from '@app/shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { takeUntil } from 'rxjs/operators';
import * as UserActions from '@core/ngrx/actions/user.actions';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';

@Component({
  selector: 'app-users-sidebar',
  templateUrl: './users-sidebar.component.html',
  styleUrls: ['./users-sidebar.component.scss']
})

export class UsersSidebarComponent implements OnInit, OnDestroy {

  activeUsers: MostActive[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
   this.checkData();
   this.getMostActive();
  }

  private checkData(): void {
    this.store.select(fromUsers.getMostActiveLoaded)
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: boolean) => {
       if (!res) {
         this.store.dispatch(UserActions.getMostActiveUsers());
       }
    });
  }

  private getMostActive(): void {
    this.store.select(fromUsers.getMostActive)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: MostActive[]) => {
      if (res) {
        this.activeUsers = res;
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
