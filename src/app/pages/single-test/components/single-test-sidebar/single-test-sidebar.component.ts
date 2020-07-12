import { Component, Input } from '@angular/core';
import { Test } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-test-sidebar',
  templateUrl: './single-test-sidebar.component.html',
  styleUrls: ['./single-test-sidebar.component.scss']
})

export class SingleTestSidebarComponent {

  @Input() test: Test;

  constructor() { }

}
