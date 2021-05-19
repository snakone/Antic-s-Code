import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { TestFacade } from '@store/test/test.facade';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TestEntry, TestResult } from '@shared/interfaces/interfaces';
import { TestResultComponent } from '@layout/dialogs/test-result/test-result.component';

@Component({
  selector: 'app-do-single-test',
  templateUrl: './do-single-test.component.html',
  styleUrls: ['./do-single-test.component.scss']
})

export class DoSingleTestComponent implements OnInit, OnDestroy {

  entry$: Observable<TestEntry>;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private testFacade: TestFacade,
    private route: ActivatedRoute,
    private router: Router,
    private crafter: CrafterService
  ) { }

  ngOnInit() {
    this.getEntryByUid();
    this.entry$ = this.testFacade.entry$;
  }

  private getEntryByUid(): void {
    this.route.params
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe(params => this.testFacade.getEntryByUid(params.uid));
  }

  public onCompleted(request: TestResult, entry: TestEntry): void {
    this.testFacade.saveRequest(request);
    this.router.navigate(['/test']);
    this.crafter.dialog(TestResultComponent, entry, 'test-result');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.testFacade.resetEntry();
  }

}
