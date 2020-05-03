import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from '@app/app.config';
import { Store } from '@ngrx/store';
import { User } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import * as fromUsers from '@core/ngrx/selectors/user.selectors';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})

export class DeleteAccountComponent implements OnInit {

  user$: Observable<User>;
  deleteAccountForm: FormGroup;
  matchError = false;

  constructor(
    private dialog: MatDialogRef<DeleteAccountComponent>,
    private translate: TranslateService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.createDeleteAccountForm();
    this.user$ = this.store.select(fromUsers.get);
  }

  private createDeleteAccountForm(): void {
    this.deleteAccountForm = new FormGroup({
      delete: new FormControl(null, [Validators.required])
    }, {
      validators: this.theyMatchError('delete',
                  this.instant('delete.sentence'))
    });
  }

  public onSubmit(): void {
    if (this.deleteAccountForm.invalid) { return; }
    this.dialog.close(true);
  }

  private theyMatchError(one: string, two: string) {
    return (group: FormGroup) => {
      const p = group.controls[one].value;
      const m = two;
      if (p === m) {
        this.matchError = false;
        return null;
      }
      this.matchError = true;
      return { error: true };
    };
  }

  private instant(value: string): string {
    return this.translate.instant(value);
  }

}
