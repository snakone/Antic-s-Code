import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { TestEntry } from '@shared/interfaces/interfaces';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EntryCardComponent {

  @Input() entry: TestEntry;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  public navigate(entry: TestEntry): void {
    this.router.navigate(['./', entry.uid], { relativeTo: this.route });
  }

  public checkResult(entry: TestEntry): void {
    console.log(entry);
  }

}
