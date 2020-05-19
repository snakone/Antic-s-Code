import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MY_SOCIAL } from '@shared/shared.data';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { MessageRequest } from '@shared/interfaces/interfaces';
import { UserService } from '@core/services/user/user.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CrafterService } from '@core/services/crafter/crafter.service';

@Component({
  selector: 'app-about-contact',
  templateUrl: './about-contact.component.html',
  styleUrls: ['./about-contact.component.scss']
})

export class AboutContactComponent implements OnInit, OnDestroy {

  mySocial = MY_SOCIAL;
  contactForm: FormGroup;
  @ViewChild('f') f: NgForm;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private userSrv: UserService,
    private crafter: CrafterService
  ) { }

  ngOnInit() {
    this.createcontactForm();
  }

  private createcontactForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(35)
      ]),
      email: new FormControl(null, [
         Validators.required,
         Validators.email,
         Validators.minLength(5),
         Validators.maxLength(35)
      ]),
      message: new FormControl(null, [
         Validators.required,
         Validators.minLength(5),
         Validators.maxLength(200)
      ])
    });
  }

  public onSubmit(): void {
    if (this.contactForm.invalid) { return; }
    const request: MessageRequest = this.contactForm.value;

    this.userSrv.sendMeAMessage(request)
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe(_ => {
       this.crafter.toaster('Mensaje enviado', 'Muchas gracias', 'info');
       this.f.resetForm();
     });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
