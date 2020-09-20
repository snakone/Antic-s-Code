import { Injectable } from '@angular/core';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { DialogData, SheetData } from '@shared/interfaces/interfaces';
import { MessageModalComponent } from '@layout/dialogs/message-modal/message-modal.component';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class CrafterService {

  constructor(
    private ts: TranslateService,
    private toastr: ToastrService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private matSheet: MatBottomSheet
  ) { }

  public toaster<T>(
    title: string,
    message: string,
    action: string
  ): ActiveToast<T> {
      title = this.translate(title);
      message = this.translate(message);
      return this.toastr[action](message, title, {
        progressBar: true,
        timeOut: 5000,
        positionClass: 'toast-bottom-right'
      });
  }

  public snack<T>(
    component: ComponentType<T>,
    duration?: number
  ): MatSnackBarRef<T> {
    return this.snackBar.openFromComponent(component, {duration});
  }

  public sheet<T>(
    component: ComponentType<T>,
    data?: SheetData
  ): MatBottomSheetRef<T> {
    return this.matSheet.open(component, {data});
  }

  public dialog<T>(
    component: ComponentType<T>,
    data?: any,
    id?: string,
    css?: string
  ): MatDialogRef<T> {
    return this.matDialog.open(component, {data, id: id || '', panelClass: css});
  }

  public modal(
    title: string,
    message: string,
    icon: string = 'error'
  ): MatDialogRef<MessageModalComponent> | undefined {
    if (this.matDialog.openDialogs.length > 0 &&
        this.matDialog.openDialogs[0].id !== 'Login') {
      return;
    }
    return this.matDialog.open(MessageModalComponent, {
      data: {
        title,
        message,
        icon
      }
    });
  }

  public handleError(err: HttpErrorResponse): void {
    switch (err.status) {
      case 0: this.modal('ERRORS.WEB.TITLE',
                         'ERRORS.WEB.MESSAGE');
              break;
      case 400: case 406:
                this.modal('ERRORS.REQUEST.TITLE',
                           'ERRORS.REQUEST.MESSAGE',
                           'help');
                break;
      case 401: this.modal('ERRORS.TOKEN.TITLE',
                           'ERRORS.TOKEN.MESSAGE',
                           'info');
                break;
      case 403: this.modal('ERRORS.ACCESS.TITLE',
                           'ERRORS.ACCESS.MESSAGE');
                break;
      case 409: case 500:
                this.modal('ERRORS.SERVER.TITLE',
                           'ERRORS.SERVER.MESSAGE');
                break;
      default: this.modal('ERRORS.UNKNOWN.TITLE',
                          'ERRORS.UNKNOWN.MESSAGE');
    }
  }

  private translate(text: string): string {
    return this.ts.instant(text);
  }

}
