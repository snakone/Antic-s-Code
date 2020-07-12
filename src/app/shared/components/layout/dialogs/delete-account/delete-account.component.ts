import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { TranslateService } from '@ngx-translate/core';
import { UsersFacade } from '@store/users/users.facade';
import { Observable } from 'rxjs';

import { User } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})

export class DeleteAccountComponent implements OnInit {

  user$: Observable<User>;
  deleteForm: FormGroup;
  matchError = false;

  constructor(
    private dialog: MatDialogRef<DeleteAccountComponent>,
    private translate: TranslateService,
    private userFacade: UsersFacade
  ) { }

  ngOnInit() {
    this.createDeleteForm();
    this.user$ = this.userFacade.user$;
  }

  private createDeleteForm(): void {
    this.deleteForm = new FormGroup({
      delete: new FormControl(null, [Validators.required])
    }, {
      validators: this.theyMatchError('delete',
                  this.translate.instant('delete.sentence'))
    });
  }

  public onSubmit(): void {
    if (this.deleteForm.invalid) { return; }
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

}
