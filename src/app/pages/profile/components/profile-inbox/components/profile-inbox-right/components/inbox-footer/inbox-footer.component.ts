import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Inbox } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-inbox-footer',
  templateUrl: './inbox-footer.component.html',
  styleUrls: ['./inbox-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InboxFooterComponent implements OnInit {

  @Input() inbox: Inbox;
  @Output() marked = new EventEmitter<boolean>();
  @Output() reply = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public emitMark(e: boolean) {
    this.marked.emit(e);
  }

  public emitReply() {
    this.reply.emit();
  }

}
