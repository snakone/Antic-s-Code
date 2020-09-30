import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Test, TestEntry } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TestContentComponent {

  @Input() tests: Test[];

  constructor() { }

  public done(entries: TestEntry[]): number {
    return !!entries?.length ?
      entries.reduce((acc, curr) =>
      acc + (curr.done ? 1 : 0), 0) : 0;
  }

}
