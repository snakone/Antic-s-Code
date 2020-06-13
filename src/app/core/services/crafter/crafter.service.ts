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
    id?: string
  ): MatDialogRef<T> {
    return this.matDialog.open(component, {data, id: id ? id :null});
  }

  public modal(
    title: string,
    message: string,
    icon: string = 'error'
  ): MatDialogRef<MessageModalComponent> {
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
    })
  }

  public handleError(err: HttpErrorResponse): void {
    switch (err.status) {
      case 0: this.modal('errors.web.title',
                         'errors.web.message');
       break;
      case 400: case 406:
                this.modal('errors.request.title',
                           'errors.request.message',
                           'help');
       break;
      case 401: this.modal('errors.token.title',
                           'errors.token.message',
                           'info');
       break;
      case 403: this.modal('errors.access.title',
                           'errors.access.message');
       break;
      case 409: case 500:
                this.modal('errors.server.title',
                           'errors.server.message');
       break;
      default: this.modal('errors.unknown.title',
                          'errors.unknown.message');
    }
  }

  private translate(text: string): string {
    return this.ts.instant(text);
  }

}
