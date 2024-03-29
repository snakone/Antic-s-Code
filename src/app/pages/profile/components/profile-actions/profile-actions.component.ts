import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@shared/interfaces/interfaces';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, switchMap, filter, tap } from 'rxjs/operators';
import { StorageService } from '@core/storage/storage.service';
import { UserService } from '@core/services/user/user.service';
import { InboxFacade } from '@store/inbox/inbox.facade';

import { DeleteAccountComponent } from '@layout/dialogs/delete-account/delete-account.component';
import { EditProfileComponent } from '@layout/dialogs/edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile-actions',
  templateUrl: './profile-actions.component.html',
  styleUrls: ['./profile-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileActionsComponent implements OnInit, OnDestroy {

  @Input() user: User;
  private unsubscribe$ = new Subject<void>();
  unread$: Observable<number>;

  constructor(
    private userSrv: UserService,
    private router: Router,
    private crafter: CrafterService,
    private ls: StorageService,
    private inboxFacade: InboxFacade
  ) { }

  ngOnInit() {
    this.unread$ = this.inboxFacade.unread$;
  }

  public delete(): void {
    this.crafter.dialog(DeleteAccountComponent)
    .afterClosed()
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(res => res && !!res),
        switchMap(_ => this.userSrv.delete())
      )
      .subscribe(_ => this.deleteSuccess());
  }

  private deleteSuccess(): void {
    this.crafter.toaster('GOODBYE', 'MISS.YOU', 'info');
    this.logOut();
    this.ls.reset();
  }

  public logOut(): void {
    this.router.navigateByUrl('/home')
      .then(() => this.userSrv.logOut());
  }

  public openModal(): void {
    this.crafter.dialog(EditProfileComponent, this.user, null, 'edit-dialog');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
