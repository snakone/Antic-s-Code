import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})

export class MaintenanceComponent implements OnInit {

  constructor(private dialog: MatDialogRef<MaintenanceComponent>) { }

  ngOnInit() { }

  close(): void {
    this.dialog.close();
  }

}
