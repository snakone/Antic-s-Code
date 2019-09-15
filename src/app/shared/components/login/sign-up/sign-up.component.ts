import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, UserResponse } from '@app/shared/interfaces/interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '@app/core/services/services.index';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit, OnDestroy {

  signUpForm: FormGroup;
  namePattern = '^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$';
  matchError = false;
  @Output() change = new EventEmitter<boolean>();
  private unsubscribe$ = new Subject<void>();

  constructor(private login: LoginService) { }

  ngOnInit() {
    this.createSignUpForm();
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) { return; }
    const user: User = this.signUpForm.value;
    this.signUp(user);
  }

  private signUp(user: User): void {
    this.login.signUp(user)
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: UserResponse) => {
        if (res.ok) {
          console.log(res);
        }
      }, (err: HttpErrorResponse) => {
        if (err.status === 0) {
          console.log(err);  // Login Error
        } else {
          console.log(err); // Email Unique
        }
    });
  }

  private createSignUpForm(): void {
    this.signUpForm = new FormGroup({
          name: new FormControl(null, [Validators.required,
                                       Validators.minLength(3),
                                       Validators.maxLength(20),
                                       Validators.pattern(this.namePattern)]),
         email: new FormControl(null, [Validators.required,
                                       Validators.email,
                                       Validators.minLength(5),
                                       Validators.maxLength(35)]),
      password: new FormControl(null, [Validators.required,
                                       Validators.minLength(5),
                                       Validators.maxLength(25)]),
       password2: new FormControl('', [Validators.required])
    }, { validators: this.theyMatchError('password', 'password2')});
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
      return {
        error: true
      };
    };
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
