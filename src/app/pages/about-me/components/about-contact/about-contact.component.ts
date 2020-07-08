import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { UserService } from '@core/services/user/user.service';
import { CrafterService } from '@core/services/crafter/crafter.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MY_SOCIAL } from '@shared/data/user';
import { MessageRequest } from '@shared/interfaces/interfaces';

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
      text: new FormControl(null, [
         Validators.required,
         Validators.minLength(5),
         Validators.maxLength(200)
      ])
    });
  }

  public onSubmit(): void {
    if (this.contactForm.invalid) return;
    const request: MessageRequest = this.contactForm.value;

    this.userSrv.sendMeAMessage(request)
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe(_ => {
       this.crafter.toaster('message.send', 'thanks.much', 'info');
       this.f.resetForm();
     });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
