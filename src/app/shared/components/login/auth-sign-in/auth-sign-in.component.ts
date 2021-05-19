import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/login/auth.service';
import { PushService } from '@core/services/push/push.service';
import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NEW_USER_PUSH } from '@shared/data/notifications';
import { UserResponse, User, NotificationPayload } from '@shared/interfaces/interfaces';

import { LoginComponent } from '../login.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss']
})

export class AuthSignInComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(
    private authSrv: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private sw: PushService,
    private userSrv: UserService,
    private crafter: CrafterService,
    private router: Router,
    private zone: NgZone,
    private fire: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  public google(): void {
    this.fire.signInWithPopup(new auth.GoogleAuthProvider())
    .then((res: auth.UserCredential) => {
      const authUser = this.createAuthUser(res.user);
      this.authSrv.signIn(authUser)
       .pipe(takeUntil(this.unsubscribe$))
       .subscribe((user: UserResponse) => this.handleSignIn(user));
    });
  }

  public github(): void {
    this.fire.signInWithPopup(new auth.GithubAuthProvider())
    .then((res: auth.UserCredential) => {
      const authUser = this.createAuthUser(res.user);
      this.authSrv.signIn(authUser)
       .pipe(takeUntil(this.unsubscribe$))
       .subscribe((user: UserResponse) => this.handleSignIn(user));
    });
  }

  private handleSignIn(data: UserResponse): void {
    this.userSrv.logIn(data);
    this.crafter.toaster(data.user.name, 'WELCOME', 'info');
    this.dialogRef.close();
    this.zone.run(() => this.router.navigateByUrl('/profile'));

    if (data.message.indexOf('Created') > -1) {
      this.sw.send(
        this.setNotification(Object.assign({}, NEW_USER_PUSH), data.user.name)
      ).toPromise().then();
    }
  }

  private createAuthUser(user: firebase.User): User {
    const authUser: User = {
      name: user.displayName,
      email: user.email,
      profile: {
        avatar: user.photoURL
      },
      auth: true,
      password: 'AuthUsersDoesntNeedPassword'
    };

    return authUser;
  }

  private setNotification(payload: NotificationPayload,
                          name: string): NotificationPayload {
      payload.body = payload.body
      .concat(`.\n¡Bienvenido/a ${name}!`);
      return payload;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
