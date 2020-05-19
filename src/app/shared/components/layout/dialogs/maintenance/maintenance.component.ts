import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})

export class MaintenanceComponent implements OnInit {

  cause: string;

  constructor(
    private dialog: MatDialogRef<MaintenanceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
    this.cause = this.data.cause;
  }

  public close(): void {
    this.dialog.close();
  }

}
