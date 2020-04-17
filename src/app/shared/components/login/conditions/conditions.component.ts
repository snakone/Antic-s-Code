import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})

export class ConditionsComponent {

  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  closeConditions(): void {
    this.close.emit(true);
  }

}
