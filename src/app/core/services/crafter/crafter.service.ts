import { Injectable } from '@angular/core';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '@env/environment';
import { DialogData, SheetData } from '@app/shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class CrafterService {

  constructor(private ts: TranslateService,
              private toastr: ToastrService,
              private snackBar: MatSnackBar,
              private matDialog: MatDialog,
              private matSheet: MatBottomSheet) {
      if (!environment.production) { console.log('CrafterService'); }
  }

  toaster(title: string, message: string, action: string): ActiveToast<any> {
    title = this.translate(title);
    message = this.translate(message);
    return this.toastr[action](message, title, {
      progressBar: true,
      timeOut: 5000,
      positionClass: 'toast-bottom-right'
    });
  }

  snack<T>(component: ComponentType<T>, duration?: number): MatSnackBarRef<T> {
    return this.snackBar.openFromComponent(component, {
      duration
    });
  }

  sheet<T>(component: ComponentType<T>, data?: SheetData): MatBottomSheetRef<T> {
    return this.matSheet.open(component, {data});
  }

  dialog<T>(component: ComponentType<T>, data?: DialogData) {
    return this.matDialog.open(component, {data});
  }

  private translate(text: string): string {
    return this.ts.instant(text);
  }

}
