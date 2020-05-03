import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { GoogleService } from '@core/services/login/google.service';
import { environment } from '@env/environment';
import { UserResponse, User, NotificationPayload } from '@shared/interfaces/interfaces';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login.component';
import { PushService } from '@core/services/push/push.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { StorageService } from '@core/storage/storage.service';
import { NEW_USER_PUSH } from '@shared/shared.data';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

declare const gapi: any;

@Component({
  selector: 'app-google-in',
  templateUrl: './google-in.component.html',
  styleUrls: ['./google-in.component.scss']
})

export class GoogleInComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(
    private google: GoogleService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private sw: PushService,
    private ls: StorageService,
    private store: Store<AppState>,
    private userSrv: UserService,
    private crafter: CrafterService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit(): void {
    this.initGoogle();
  }

  public initGoogle(): void {
    const element = document.getElementById('google');
    if (!this.google.loaded) {
      gapi.load('auth2', ()=> {
        this.google.auth2 = gapi.auth2.init({
          client_id: environment.keys.google,
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.googlePrompt(element);
        this.google.loaded = true;
      });
      return;
    }
    this.googlePrompt(element);
  }

  private googlePrompt(element: HTMLElement): void {
    this.google.auth2.attachClickHandler(element, {}, profile => {
      const token = profile.getAuthResponse().id_token;
      this.google.signIn(token)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: UserResponse) => this.handleSignIn(res));
    });
  }

  private handleSignIn(data: UserResponse): void {
    this.dialogRef.close();
    this.userSrv.login(data);
    this.crafter.toaster(data.user.name, 'welcome', 'info');
    this.zone.run(() => this.router.navigateByUrl('/profile'));

    if (data.message.indexOf('Created') > -1) {
      this.sw.sendNotification(
        this.setNotification(Object.assign({}, NEW_USER_PUSH), data.user)
        ).subscribe();
    }
  }

  private setNotification(payload: NotificationPayload,
                          user: User): NotificationPayload {
      payload.body = payload.body
      .concat(`.\n¡Bienvenido/a ${user.name}!`);
      return payload;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
