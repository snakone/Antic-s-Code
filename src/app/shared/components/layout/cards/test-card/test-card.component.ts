import { Component, Input } from '@angular/core';
import { List } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})

export class TestCardComponent {

  @Input() category: List;
  @Input() first: boolean;
  @Input() last: boolean;

  constructor() { }

}
