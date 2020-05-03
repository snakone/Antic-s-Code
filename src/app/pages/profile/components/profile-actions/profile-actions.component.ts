import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@shared/interfaces/interfaces';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { Subject } from 'rxjs';
import { DeleteAccountComponent } from '@layout/dialogs/delete-account/delete-account.component';
import { takeUntil, switchMap, filter } from 'rxjs/operators';
import { StorageService } from '@core/storage/storage.service';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-profile-actions',
  templateUrl: './profile-actions.component.html',
  styleUrls: ['./profile-actions.component.scss']
})

export class ProfileActionsComponent implements OnDestroy {

  @Input() user: User;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private userSrv: UserService,
    private router: Router,
    private crafter: CrafterService,
    private ls: StorageService
  ) { }

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
    this.crafter.toaster('goodbye', 'miss.you', 'info');
    this.logOut();
    this.ls.reset();
  }

  public logOut(): void {
    this.router.navigateByUrl('/home')
      .then(() => this.userSrv.logout());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
