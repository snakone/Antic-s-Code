import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Test, TestEntry } from '@shared/interfaces/interfaces';
import { TestFacade } from '@store/test/test.facade';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit, OnDestroy {

  tests$: Observable<Test[]>;
  entriesByUser$ = this.testFacade.entriesByUser$;
  private unsubscribe$ = new Subject<void>();

  constructor(private testFacade: TestFacade) { }

  ngOnInit() {
    this.tests$ = this.testFacade.tests$;
    this.checkData();
    this.checkEntries();
  }

  private checkData(): void {
    this.testFacade.loaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.testFacade.get());
  }

  private checkEntries(): void {
    this.testFacade.entriesByUserLoaded$
     .pipe(
       filter(res => !res),
       takeUntil(this.unsubscribe$)
      )
     .subscribe(_ => this.testFacade.getEntriesByUser());
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.testFacade.reset();
  }

}
