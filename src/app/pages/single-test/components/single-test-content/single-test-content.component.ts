import { Component, Input } from '@angular/core';
import { Test } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-test-content',
  templateUrl: './single-test-content.component.html',
  styleUrls: ['./single-test-content.component.scss']
})

export class SingleTestContentComponent {

  @Input() test: Test;

  constructor() { }

}
