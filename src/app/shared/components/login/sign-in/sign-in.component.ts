import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

import { StorageService } from '@core/storage/storage.service';
import { LoginService } from '@core/services/login/login.service';
import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { UsersFacade } from '@store/users/users.facade';
import { Subject, Observable } from 'rxjs';
import { takeUntil, switchMap, filter, tap } from 'rxjs/operators';

import { UserResponse } from '@shared/interfaces/interfaces';
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

  constructor(
    private login: LoginService,
    private ls: StorageService,
    private usersFacade: UsersFacade,
    private userSrv: UserService,
    private crafter: CrafterService,
    public dialogRef: MatDialogRef<LoginComponent>,
    private router: Router
  ) { }

  ngOnInit() {
    this.createSignInForm();
    this.rememberMe();
    this.userEmail$ = this.usersFacade.email$;
  }

  private createSignInForm(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [
         Validators.required,
         Validators.email,
         Validators.minLength(5),
         Validators.maxLength(35)
      ]),
      password: new FormControl(null, [
         Validators.required,
         Validators.minLength(5),
         Validators.maxLength(25)
      ])
    });
  }

  public onSubmit(): void {
    if (this.signInForm.invalid) { return; }
    const { email, password } = this.signInForm.value;
    this.signIn(email, password);
  }

  private signIn(e: string, p: string): void {
    this.login.signIn(e, p)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: UserResponse) => this.handleSignIn(res));
  }

  private handleSignIn(data: UserResponse): void {
    this.dialogRef.close();
    this.userSrv.logIn(data, this.remember);
    this.crafter.toaster(data.user.name, 'WELCOME', 'info');
    this.router.navigateByUrl('/profile');
  }

  public recover(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('/help/recover');
  }

  public signUp(): void {
    this.changed.emit(true);
  }

  private rememberMe(): void {
    const id = this.ls.get('user');
    const re = this.ls.get('remember');

    if (re && id) {
      this.usersFacade.email$
        .pipe(
          takeUntil(this.unsubscribe$),
          tap(res => this.setRemember(res)),
          filter(res => !res),
          switchMap(() => this.userSrv.getById(id))
        )
        .subscribe(_ => this.usersFacade.setEmail(_.email));
    }
  }

  private setRemember(email: string): void {
    this.signInForm.controls.email.setValue(email);
    this.remember = email ? true : false;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
