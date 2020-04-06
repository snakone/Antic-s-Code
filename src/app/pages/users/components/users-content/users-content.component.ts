import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { takeUntil } from 'rxjs/operators';
import { User } from '@app/shared/interfaces/interfaces';
import * as UserActions from '@core/ngrx/actions/user.actions';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import { PaginationService } from 'ngx-pagination';

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
  count = 0;

  constructor(private store: Store<AppState>,
              private pagination: PaginationService) { }

  ngOnInit() {
    this.checkData();
    this.getAllUsers();
    this.getCurrentPage();
  }

  sort(rol: string): void {
    if (rol === 'All') {
      this.filteredUsers = this.users;
      this.doResize();
      return;
    }
    this.filteredUsers = this.users.filter(user => user.account === rol);
    this.doResize();
  }

  search(): void {
    this.filteredUsers = this.users
    .filter(user => user.name.match(new RegExp(this.value, 'i')));
    this.doResize();
  }

  private checkData(): void {
    this.store.select(fromUsers.getAllUsersLoaded)
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: boolean) => {
       if (!res) {
         this.store.dispatch(UserActions.getAllUsers());
       }
    });
  }

  private getAllUsers(): void {
    this.store.select(fromUsers.getAllUsers)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((res: User[]) => {
      if (res) {
        this.users = res;
        this.filteredUsers = res;
        this.count = this.users.length;
      }
    });
  }

  private getCurrentPage(): void {
    this.pagination.change
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: string) => {
        if (res) {
          this.page = this.pagination.getCurrentPage(res);
       }
     });
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
