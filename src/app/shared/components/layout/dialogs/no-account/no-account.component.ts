import { Component, OnInit, Inject } from '@angular/core';
import { LoginComponent } from '@app/shared/components/login/login.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '@app/shared/interfaces/interfaces';
import { CrafterService } from '@app/core/services/crafter/crafter.service';

@Component({
  selector: 'app-no-account',
  templateUrl: './no-account.component.html',
  styleUrls: ['./no-account.component.scss']
})

export class NoAccountComponent implements OnInit {

  type: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private crafter: CrafterService,
              public dialogRef: MatDialogRef<NoAccountComponent>) { }

  ngOnInit() { }

  openLogin(register: boolean): void {
    this.dialogRef.close();
    this.crafter.dialog(LoginComponent, {register});  // Navigate to Register TAP
  }

}
