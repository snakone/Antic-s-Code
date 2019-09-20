import { Injectable, Component } from '@angular/core';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentType } from '@angular/cdk/overlay';

@Injectable()

export class CrafterService {

  constructor(private toastr: ToastrService,
              private snackBar: MatSnackBar) { }

  toaster(title: string, message: string, action: string): ActiveToast<any> {
    return this.toastr[action](message, title, {
      progressBar: true,
      timeOut: 5000,
      positionClass: 'toast-bottom-right'
    });
  }

  snack<T>(component: ComponentType<T>, duration?: number) {
    this.snackBar.openFromComponent(component, {
      duration
    });
  }

}
