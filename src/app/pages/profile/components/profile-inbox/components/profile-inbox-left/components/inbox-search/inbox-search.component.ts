import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inbox-search',
  templateUrl: './inbox-search.component.html',
  styleUrls: ['./inbox-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InboxSearchComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  @Output() new = new EventEmitter<void>();
  @Output() reload = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public emitSearch(e: any): void {
    this.search.emit(e.target.value);
  }

  public emitNew(): void {
    this.new.emit();
  }

  public emitReload(): void {
    this.reload.emit();
  }

}
