import { Component, EventEmitter, Output } from '@angular/core';
import { CONDITIONS } from '@shared/data/app';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})

export class ConditionsComponent {

  @Output() close = new EventEmitter<boolean>();
  conditions = CONDITIONS;

  constructor() { }

  public closeConditions(): void {
    this.close.emit(true);
  }

}
