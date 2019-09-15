import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService, UserService } from '@app/core/services/services.index';
import { UserResponse } from '@app/shared/interfaces/interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { StorageService } from '@app/core/storage/storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import * as UserActions from '@core/ngrx/actions/user.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginComponent } from '../login.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent implements OnInit, OnDestroy {

  signInForm: FormGroup;
  remember = false;
  @Output() changed = new EventEmitter<boolean>();
  private unsubscribe$ = new Subject<void>();

  constructor(private login: LoginService,
              private ls: StorageService,
              private store: Store<AppState>,
              private userService: UserService,
              public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
    this.createSignInForm();
    this.rememberMe();
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
        if (res.ok) {
          this.store.dispatch(UserActions.setUser({ user: res.user }));
          this.setStorage(res);
          this.dialogRef.close();
        }
      }, (err: HttpErrorResponse) => {
          if (err.status === 0) {
            console.log(err);  // Login Error
          } else {
            console.log(err);  // Invalid Credentials
          }
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
      this.userService.getUserById(id)
       .pipe(takeUntil(this.unsubscribe$))
       .subscribe((res: UserResponse) => {
         if (res.ok) {
          this.signInForm.controls.email.setValue(res.user.email);
          this.remember = true;
        }
      });
    }
  }

  private setStorage(data: UserResponse): void {
    this.ls.setKey('token', data.token);
    this.ls.setKey('user', data.user._id);
    this.ls.setKey('remember', this.remember);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
