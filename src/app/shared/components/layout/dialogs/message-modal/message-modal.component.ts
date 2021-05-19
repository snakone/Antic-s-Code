import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageModalData } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MessageModalComponent implements OnInit {

  color: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MessageModalData,
    private dialogRef: MatDialogRef<MessageModalComponent>
  ) { }

  ngOnInit() {
    this.pickColor(this.data.icon);
  }

  private pickColor(icon: string): void {
    switch (icon) {
      case 'error':
        this.color = 'red';
        break;
      case 'help':
        this.color = 'blue';
        break;
      case 'info':
        this.color = 'green';
        break;
      default: this.color = 'red';
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

}
