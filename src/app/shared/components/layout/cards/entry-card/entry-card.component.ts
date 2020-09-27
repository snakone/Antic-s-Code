import { Component, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { TestEntry, TestResult } from '@shared/interfaces/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EntryCardComponent {

  result$: Observable<TestResult>;
  @Input() entry: TestEntry;
  @Output() check = new EventEmitter<TestEntry>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public navigate(entry: TestEntry): void {
    this.router.navigate(['./', entry.uid], { relativeTo: this.route });
  }

  public checkResult(entry: TestEntry): void {
    this.check.emit(entry);
  }

}
