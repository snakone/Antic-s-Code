import { Component, Input } from '@angular/core';
import { Test, TestEntry } from '@shared/interfaces/interfaces';
import { TestFacade } from '@store/test/test.facade';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.scss']
})

export class TestContentComponent {

  @Input() tests: Test[];
  @Input() entriesByUser: TestEntry[];

  constructor(private testFacade: TestFacade) { }

}
