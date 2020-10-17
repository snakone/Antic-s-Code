import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Test, TestEntry } from '@shared/interfaces/interfaces';

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

  constructor(private router: Router) { }

  public width(): string {
    return Math.round(
      (this.done / this.test.entries?.length || 0) || 0
    ) * 100 + '%';
  }

  public go(e: TestEntry): void {
    if (e.done) { return; }
    this.router.navigateByUrl('/test/' + e.category);
  }

}
