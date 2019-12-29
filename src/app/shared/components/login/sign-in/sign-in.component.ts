import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService, UserService, CrafterService } from '@app/core/services/services.index';
import { UserResponse } from '@app/shared/interfaces/interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { StorageService } from '@app/core/storage/storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import * as UserActions from '@core/ngrx/actions/user.actions';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit, OnDestroy {

  @Output() changed = new EventEmitter<boolean>();  // Swap Login/Register
  signInForm: FormGroup;
  userEmail$: Observable<string>;
  remember = false;
  private unsubscribe$ = new Subject<void>();

  constructor(private login: LoginService,
              private ls: StorageService,
              private store: Store<AppState>,
              private userService: UserService,
              private crafter: CrafterService,
              public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    this.createSignInForm();
    this.rememberMe();
    this.userEmail$ = this.store.select(fromUsers.getUserEmail);
  }

  onSubmit(): void {
    if (this.signInForm.invalid) { return; }
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.signIn(email, password);
  }

  private signIn(e: string, p: string): void {
    this.login.signIn(e, p)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: UserResponse) => {
        if (res.ok) { this.handleSignIn(res); }
      },
        (err: HttpErrorResponse) => {
          err.status === 0 ?
          this.handleError('server') : this.handleError();
      });
  }

  signUp(): void {
    this.changed.emit(true);
  }

  private createSignInForm(): void {
    this.signInForm = new FormGroup({
       email: new FormControl(null, [Validators.required,
                                     Validators.email,
                                     Validators.minLength(5),
                                     Validators.maxLength(35)]),
    password: new FormControl(null, [Validators.required,
                                     Validators.minLength(5),
                                     Validators.maxLength(25)])});
  }

  private rememberMe(): void {
    const id = this.ls.get('user');
    const re = this.ls.get('remember');

    if ( re && id) {
      this.store.select(fromUsers.getUserEmail)
        .pipe(takeUntil(this.unsubscribe$),
          switchMap((email: string) => {
            if (email) {
              this.signInForm.controls.email.setValue(email);
              this.remember = true;
            }
            return email ? of({ok: false}) : this.userService.getUserById(id);
          })).subscribe((res: UserResponse) => {
            if (res.ok) {
              this.store.dispatch(UserActions.setUserEmail({ email: res.user.email }));
          }
      });
    }
  }

  private handleSignIn(data: UserResponse): void {
    this.dialogRef.close();
    this.store.dispatch(UserActions.setUser({user: data.user}));
    this.userService.setUser(data.user);
    this.ls.setKey('token', data.token);
    this.ls.setKey('user', data.user._id);
    this.ls.setKey('remember', this.remember);
    this.crafter.toaster(data.user.name, 'welcome', 'info');
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
