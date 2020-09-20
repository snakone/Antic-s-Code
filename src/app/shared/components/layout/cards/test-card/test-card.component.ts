import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Test, TestEntry } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TestCardComponent implements OnChanges {

  @Input() test: Test;
  @Input() entriesByUser: TestEntry[];
  entryUserByCategory: TestEntry[];

  constructor() { }

  ngOnChanges() {
    this.getCompletedEntries();
  }

  public completed(entry: TestEntry): boolean {
    if (!entry || !this.entriesByUser) { return false; }
    return this.entriesByUser.some(e => e.uid === entry.uid);
  }

  getCompletedEntries(): void {
    if (!this.test || !this.entriesByUser) { return; }
    this.entryUserByCategory = this.entriesByUser
                                .filter(e => e.category === this.test.category);
  }

  public calculateWidth(): string {
    if (!this.test || !this.entryUserByCategory) { return; }
    return Math.round(
      (this.entryUserByCategory.length /
       this.test.entries?.length) || 0) * 100 + '%';
  }

}
