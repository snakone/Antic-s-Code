import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserResponse, NotificationPayload } from '@shared/interfaces/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login.component';
import { Router } from '@angular/router';
import { LoginService } from '@core/services/login/login.service';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { PushService } from '@core/services/push/push.service';
import { NEW_USER_PUSH } from '@shared/shared.data';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit, OnDestroy {

  @Output() changed = new EventEmitter<boolean>();
  signUpForm: FormGroup;
  namePattern = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
  matchError = false;
  conditions: boolean;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private login: LoginService,
    private crafter: CrafterService,
    private userSrv: UserService,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    private sw: PushService
  ) { }

  ngOnInit() {
    this.createSignUpForm();
  }

  private createSignUpForm(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(this.namePattern)
      ]),
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
      ]),
      password2: new FormControl('', [
        Validators.required
      ])
    },
    {
      validators: this.theyMatchError('password', 'password2')
    });
  }

  public openConditions(): void {
    this.changed.emit(true);
  }

  public onSubmit(): void {
    if (this.signUpForm.invalid) { return; }
    const user: User = this.signUpForm.value;
    this.signUp(user);
  }

  private signUp(user: User): void {
    this.login.signUp(user)
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: UserResponse) => this.handleSignUp(res));
  }

  private handleSignUp(data: UserResponse): void {
    this.dialogRef.close();
    this.userSrv.login(data);
    this.crafter.toaster(data.user.name, 'welcome', 'info');
    this.sw.sendNotification(
      this.setNotification(Object.assign({}, NEW_USER_PUSH), data.user)
      ).subscribe();
    this.router.navigateByUrl('/profile');
  }

  private theyMatchError(one: string, two: string) {
    return (group: FormGroup) => {
      const p = group.controls[one].value;
      const m = group.controls[two].value;
      if (p === m) {
        this.matchError = false;
        return null;
      }
      this.matchError = true;
      return { error: true };
    };
  }

  private setNotification(
    payload: NotificationPayload,
    user: User
  ): NotificationPayload {
      payload.body = payload.body
      .concat(`.\n¡¡Bienvenido/a ${user.name}!!`);
      return payload;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
