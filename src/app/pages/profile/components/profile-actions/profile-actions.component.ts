import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserResponse } from '@app/shared/interfaces/interfaces';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { Subject, of } from 'rxjs';
import { DeleteAccountComponent } from '@layout/dialogs/delete-account/delete-account.component';
import { takeUntil, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { StorageService } from '@core/storage/storage.service';
import { UserService } from '@app/core/services/user/user.service';

@Component({
  selector: 'app-profile-actions',
  templateUrl: './profile-actions.component.html',
  styleUrls: ['./profile-actions.component.scss']
})

export class ProfileActionsComponent implements OnDestroy {

  @Input() user: User;
  private unsubscribe$ = new Subject<void>();

  constructor(private userService: UserService,
              private router: Router,
              private crafter: CrafterService,
              private ls: StorageService) { }

  delete(): void {
    this.crafter.dialog(DeleteAccountComponent).afterClosed()
      .pipe(switchMap((res: boolean) => {
        return res ? this.userService.deleteUser() :
               of({ ok: false });
      }), takeUntil(this.unsubscribe$))
      .subscribe((res: UserResponse) => {
        if (res.ok) {
          this.crafter.toaster('goodbye', 'miss.you', 'info');
          this.ls.reset();
          this.logOut();
        }
      }, (err: HttpErrorResponse) => {
        err.status === 0 ?
        this.handleError('server') : this.handleError();
    });
  }

  logOut(): void {
    this.router.navigateByUrl('/home')
      .then(() => this.userService.logout());
  }

  private handleError(type?: string): void {
    if (type === 'server') {
      this.crafter.toaster('server.error',
                           'server.bad',
                           'error');
    } else {
      this.crafter.toaster('update.error',
                           'server.bad',
                           'error');
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
