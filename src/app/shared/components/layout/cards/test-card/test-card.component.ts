import { Component, Input } from '@angular/core';
import { Test } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})

export class TestCardComponent {

  @Input() test: Test;
  @Input() first: boolean;
  @Input() last: boolean;

  constructor() { }

}
