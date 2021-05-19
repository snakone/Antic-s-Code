import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TestFacade } from '@app/core/ngrx/test/test.facade';
import { Test, TestEntry } from '@app/shared/interfaces/interfaces';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-more-entries-box',
  templateUrl: './more-entries-box.component.html',
  styleUrls: ['./more-entries-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MoreEntriesBoxComponent implements OnInit, OnDestroy {

  @Input() test: Test;
  entries$: Observable<TestEntry[]>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private testFacade: TestFacade,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkData();
    this.entries$ = this.testFacade.entries$
                    .pipe(
                      filter(res => !!res && !!this.test),
                      map((e: TestEntry[]) =>
                      e.filter(x => x.category !== this.test.category)
                    ));
  }

  private checkData(): void {
    this.testFacade.loaded$
     .pipe(
       filter(res => !res && !!this.test),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.testFacade.get());
  }

  public navigate(e: TestEntry): void {
    if (e.done) { return; }
    this.router.navigateByUrl('/test/' + e.category + '/' + e.uid);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
