import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UniqueEmailValidator } from '@core/services/validators/validators';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-help-recover',
  templateUrl: './help-recover.component.html',
  styleUrls: ['./help-recover.component.scss']
})

export class HelpRecoverComponent implements OnInit, OnDestroy {

  recoverForm: FormGroup;
  private unsubscribe$ = new Subject<void>();
  get emailCtrl() { return this.recoverForm.get('email'); }
  get captchaCtrl() { return this.recoverForm.get('recaptcha'); }

  constructor(
    private userSrv: UserService,
    private validator: UniqueEmailValidator,
    private crafter: CrafterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createRecoverForm();
  }

  private createRecoverForm(): void {
    this.recoverForm = new FormGroup({
      email: new FormControl(null, [
         Validators.required,
         Validators.email,
         Validators.minLength(5),
         Validators.maxLength(35)
        ], this.validator.validate.bind(this)),
      recaptcha: new FormControl(null, Validators.required)
    }, {updateOn: 'blur'});
  }

  public onSubmit(): void {
    if (this.recoverForm.invalid || this.emailCtrl.pending) { return; }
    this.userSrv.recoverPassword(this.emailCtrl.value)
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe(_ => {
      this.crafter.toaster('SUCCESS', 'EMAIL.SEND', 'info');
      this.router.navigateByUrl('/');
     });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
