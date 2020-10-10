import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inbox } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-inbox-messages',
  templateUrl: './inbox-messages.component.html',
  styleUrls: ['./inbox-messages.component.scss']
})

export class InboxMessagesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Inbox,
    private dialogRef: MatDialogRef<InboxMessagesComponent>,
  ) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.dialogRef.close();
  }

}
