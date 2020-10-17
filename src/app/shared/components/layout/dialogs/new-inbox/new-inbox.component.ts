import { Component, OnInit, ChangeDetectionStrategy, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersFacade } from '@store/users/users.facade';
import { InboxMessage, User } from '@shared/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { InboxFacade } from '@store/inbox/inbox.facade';
import { UserService } from '@core/services/user/user.service';
import { LanguageService } from '@core/language/services/language.service';
import * as moment from 'moment';
import { INBOX_MAX_LENGTH } from '@shared/data/forms';

@Component({
  selector: 'app-new-inbox',
  templateUrl: './new-inbox.component.html',
  styleUrls: ['./new-inbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewInboxComponent implements OnInit, OnDestroy {

  users$: Observable<User[]>;
  user: User;
  form: FormGroup;
  maxLength = INBOX_MAX_LENGTH;
  filterCtrl: FormControl = new FormControl();
  private unsubscribe$ = new Subject<void>();

  get msgCtrl() { return this.form.get('message'); }

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
    this.user = this.userSrv.getUser();
    this.checkData();
    this.newInboxForm();
    this.search();
  }

  private search(): void {
    this.filterCtrl.valueChanges
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((e: string) => {
      if (!e || e === '') {
        this.users$ = this.usersFacade.users$;
        return;
      }
      this.usersFacade.search(e);
      this.users$ = this.usersFacade.filtered$;
    });
  }

  private newInboxForm(): void {
    this.form = new FormGroup({
       to: new FormControl({
         value: this.checkSender() || null,
         disabled: this.data?.sender ? true : false
       }, [Validators.required]),
       subject: new FormControl({
         value: this.data?.subject || null,
         disabled: this.data?.subject ? true : false
        }, [
         Validators.required,
         Validators.minLength(3)
       ]),
       message: new FormControl('' || null, [
         Validators.required,
         Validators.minLength(3),
         Validators.maxLength(INBOX_MAX_LENGTH),
       ]),
    });
  }

  public submit(): void {
    if (this.form.invalid) { return; }

    moment.locale(this.language.getCurrent());
    const message: InboxMessage = {
      sender: this.user,
      receiver: this.form.getRawValue().to,
      subject: this.form.getRawValue().subject,
      message: this.form.value.message,
      date: moment().format('D/MM/YY, h:mm')
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

  private checkSender(): string {
    if (!this.data) { return null; }
    return this.user._id === this.data.sender._id ?
           this.data.receiver._id : this.data.sender._id;
  }

  public close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
