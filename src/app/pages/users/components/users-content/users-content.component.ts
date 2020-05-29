import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { takeUntil, filter } from 'rxjs/operators';
import { User } from '@shared/interfaces/interfaces';
import { PaginationService } from 'ngx-pagination';

import * as UserActions from '@core/ngrx/actions/user.actions';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import { USER_ROLS } from '@shared/shared.data';

@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.scss']
})

export class UsersContentComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  users: User[] = [];
  filteredUsers: User[] = [];
  page = 1;
  itemsPerPage = 10;
  value = '';
  userRols = USER_ROLS;

  constructor(
    private store: Store<AppState>,
    private pagination: PaginationService
  ) { }

  ngOnInit() {
    this.checkData();
    this.getUsers();
    this.getCurrentPage();
  }

  private checkData(): void {
    this.store.select(fromUsers.getAllLoaded)
     .pipe(
       takeUntil(this.unsubscribe$),
       filter(res => !res)
      )
     .subscribe(_ => this.store.dispatch(UserActions.get())
    );
  }

  private getUsers(): void {
    this.store.select(fromUsers.getAll)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: User[]) => {
      this.users = res;
      this.filteredUsers = res;
    });
  }

  public sort(rol: string): void {
    if (rol === 'All') {
      this.filteredUsers = this.users;
      this.doResize();
      return;
    }
    this.filteredUsers = this.users
    .filter(user => user.account === rol);
    this.doResize();
  }

  public search(): void {
    this.filteredUsers = this.users
    .filter(user => user.name.match(new RegExp(this.value, 'i')));
    this.doResize();
  }

  private getCurrentPage(): void {
    this.pagination.change
     .pipe(
       takeUntil(this.unsubscribe$),
       filter(res => res && !!res)
      )
     .subscribe((res: string) =>
      this.page = this.pagination.getCurrentPage(res)
    );
  }

  private doResize(): void { // Sticky
    this.page = 1;
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
