import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrafterService } from '@app/core/services/crafter/crafter.service';
import { UserService } from '@core/services/user/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-help-new-password',
  templateUrl: './help-new-password.component.html',
  styleUrls: ['./help-new-password.component.scss']
})

export class HelpNewPasswordComponent implements OnInit, OnDestroy {

  private token: string;
  private unsubscribe$ = new Subject<void>();
  newPassForm: FormGroup;
  matchError = false;

  constructor(
    private route: ActivatedRoute,
    private userSrv: UserService,
    private crafter: CrafterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createNewPassForm();
    this.route.params
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(params => this.token = params.token);
  }

  private createNewPassForm(): void {
    this.newPassForm = new FormGroup({
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

  public onSubmit(): void {
    if (this.newPassForm.invalid) { return; }
    const { password } = this.newPassForm.value;
    this.userSrv.createNewPassword({password, token: this.token})
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe(_ => {
      this.crafter.toaster('SUCCESS', 'PASSWORD.CHANGED', 'info');
      this.router.navigateByUrl('/');
     });
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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
