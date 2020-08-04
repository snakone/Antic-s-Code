import { Component, OnInit, Input, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { TestEntry } from '@shared/interfaces/interfaces';
import { TestFacade } from '@store/test/test.facade';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { TestService } from '@core/services/test/test.service';

@Component({
  selector: 'app-entry-card',
  templateUrl: './entry-card.component.html',
  styleUrls: ['./entry-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EntryCardComponent implements OnInit, OnDestroy {

  @Input() entry: TestEntry;
  @Input() entriesByUser: TestEntry[];
  private unsubscribe$ = new Subject<void>();
  done: boolean;

  constructor(
    private testFacade: TestFacade,
    private router: Router,
    private route: ActivatedRoute,
    private testSrv: TestService
  ) { }

  ngOnInit(): void {
    this.checkEntry();
  }

  public navigate(entry: TestEntry): void {
    this.testFacade.setEntry(entry);
    this.router.navigate(['./do'], { relativeTo: this.route });
  }

  private checkEntry(): void {
    if (this.entriesByUser) {
      const cb = (e: TestEntry) => e.uid === this.entry.uid;
      this.done = this.entriesByUser.some(cb);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
