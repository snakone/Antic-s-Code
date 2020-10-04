import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { PaginationService } from 'ngx-pagination';

import { USER_ROLS } from '@shared/data/user';
import { User } from '@shared/interfaces/interfaces';
import { UsersFacade } from '@store/users/users.facade';

@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.scss']
})

export class UsersContentComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();
  users$: Observable<User[]>;
  filtered$: Observable<User[]>;
  page = 1;
  itemsPerPage = 5;
  value = '';
  userRols = USER_ROLS;

  constructor(
    private usersFacade: UsersFacade,
    private pagination: PaginationService
  ) { }

  ngOnInit() {
    this.checkData();
    this.getCurrentPage();
    this.users$ = this.usersFacade.users$;
    this.filtered$ = this.usersFacade.filtered$;
  }

  private checkData(): void {
    this.usersFacade.usersLoaded$
     .pipe(
       takeUntil(this.unsubscribe$),
       filter(res => !res)
      )
     .subscribe(_ => this.usersFacade.get());
  }


  public sort(rol: string): void {
    rol === 'ALL' ? rol = '' : rol = rol;
    this.usersFacade.sort(rol);
    this.doResize();
  }

  public search(): void {
    this.usersFacade.search(this.value);
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
