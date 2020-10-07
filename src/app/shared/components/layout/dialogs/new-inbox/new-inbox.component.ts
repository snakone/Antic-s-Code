import { Component, OnInit, ChangeDetectionStrategy, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersFacade } from '@store/users/users.facade';
import { InboxMessage, User } from '@shared/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { InboxFacade } from '@store/inbox/inbox.facade';
import { UserService } from '@core/services/user/user.service';
import * as moment from 'moment';
import { LanguageService } from '@core/language/services/language.service';

@Component({
  selector: 'app-new-inbox',
  templateUrl: './new-inbox.component.html',
  styleUrls: ['./new-inbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewInboxComponent implements OnInit, OnDestroy {

  users$: Observable<User[]>;
  private unsubscribe$ = new Subject<void>();
  form: FormGroup;
  public filterCtrl: FormControl = new FormControl();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: InboxMessage,
    private dialogRef: MatDialogRef<NewInboxComponent>,
    private usersFacade: UsersFacade,
    private userSrv: UserService,
    private inboxFacade: InboxFacade,
    private crafter: CrafterService,
    private language: LanguageService
  ) { }

  ngOnInit(): void {
    this.users$ = this.usersFacade.filtered$;
    this.checkData();
    this.getMessage();
    this.search();
  }

  private search(): void {
    this.filterCtrl.valueChanges
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(e => {
      if (!e || e === '') {
        this.users$ = this.usersFacade.users$;
        return;
      }
      this.usersFacade.search(e);
      this.users$ = this.usersFacade.filtered$;
    });
  }

  private getMessage(): void {
    this.inboxFacade.message$
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: string) => this.newInboxForm(res));
  }

  private newInboxForm(msg: string): void {
    this.form = new FormGroup({
       to: new FormControl({
         value: this.data?.sender._id || null,
         disabled: this.data?.sender ? true : false
       }, [Validators.required]),
       subject: new FormControl({
         value: this.data?.subject || null,
         disabled: this.data?.subject ? true : false
        }, [
         Validators.required,
         Validators.minLength(3)
       ]),
       message: new FormControl(msg || null, [
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(200),
       ]),
    });
  }

  public submit(): void {
    if (this.form.invalid) { return; }

    moment.locale(this.language.getCurrent());
    const message: InboxMessage = {
      sender: this.userSrv.getUser(),
      receiver: this.form.getRawValue().to,
      subject: this.form.getRawValue().subject,
      message: this.form.value.message,
      date: moment().format('LLL'),
      read: false
    };

    this.inboxFacade.send(message);
    this.crafter.toaster('SUCCESS', 'MESSAGE.SEND', 'info');
    this.close();
  }

  private checkData(): void {
    this.usersFacade.usersLoaded$
     .pipe(
       takeUntil(this.unsubscribe$),
       filter(res => !res)
      )
     .subscribe(_ => this.usersFacade.get());
  }

  public filter(e: string): void {

  }

  public close(): void {
    this.inboxFacade.resetMessage();
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.inboxFacade.setMessage(this.form.value.message);
  }

}
