import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Test } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TestCardComponent {

  @Input() test: Test;
  @Input() done: number;
  @Input() last: boolean;

  constructor() { }

  public width(): string {
    return Math.round(
      (this.done / this.test.entries?.length || 0) || 0
    ) * 100 + '%';
  }

}
