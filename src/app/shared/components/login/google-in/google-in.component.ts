import { Component, OnInit } from '@angular/core';
import { GoogleService } from '@app/core/services/google.service';
import { environment } from '@env/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { UserResponse, User, NotificationPayload } from '@app/shared/interfaces/interfaces';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login.component';
import { PushService } from '@app/core/services/push/push.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { UserService } from '@app/core/services/user/user.service';
import { CrafterService } from '@app/core/services/crafter/crafter.service';
import { StorageService } from '@app/core/storage/storage.service';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { NEW_USER_PUSH } from '@app/shared/shared.data';
import { Router } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-google-in',
  templateUrl: './google-in.component.html',
  styleUrls: ['./google-in.component.scss']
})

export class GoogleInComponent implements OnInit {

  constructor(private google: GoogleService,
              public dialogRef: MatDialogRef<LoginComponent>,
              private sw: PushService,
              private ls: StorageService,
              private store: Store<AppState>,
              private userService: UserService,
              private crafter: CrafterService,
              private router: Router) { }

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
      this.google.googleSignIn(token)
      .subscribe((res: UserResponse) => {
        if (res.ok) { this.handleSignIn(res); }
      },
        (err: HttpErrorResponse) => {
          err.status === 0 ?
          this.handleError('server') : this.handleError();
      });
    });
  }

  private handleSignIn(data: UserResponse): void {
    this.dialogRef.close();
    this.store.dispatch(UserActions.setUser({user: data.user}));
    this.userService.setUser(data.user);
    this.ls.setKey('token', data.token);
    this.ls.setKey('user', data.user._id);
    this.sw.showPrompt();
    this.crafter.toaster(data.user.name, 'welcome', 'info');
    this.router.navigateByUrl('/profile');

    if (data.message.indexOf('Created') > -1) {
      this.sw.sendNotification(
        this.setNotification(Object.assign({}, NEW_USER_PUSH), data.user)
        ).subscribe();
    }
  }

  private handleError(type?: string): void {
    if (type === 'server') {
      this.crafter.toaster('server.error',
                           'server.bad',
                           'error');
    } else {
      this.crafter.toaster('incorrect.login',
                           'try.again',
                           'error');
    }
  }

  private setNotification(payload: NotificationPayload,
                          user: User): NotificationPayload {
      payload.body = payload.body
      .concat(`.\n¡¡Bienvenido/a ${user.name}!!`);
      return payload;
  }

}
