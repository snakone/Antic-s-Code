import { Component, OnInit} from '@angular/core';
import { TestFacade } from '@store/test/test.facade';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { TestResultComponent } from '@layout/dialogs/test-result/test-result.component';
import { Test, TestEntry, TestResult } from '@shared/interfaces/interfaces';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-single-test-content',
  templateUrl: './single-test-content.component.html',
  styleUrls: ['./single-test-content.component.scss']
})

export class SingleTestContentComponent implements OnInit {

  test$: Observable<Test>;
  result$: Observable<TestResult>;
  entry$: Observable<TestEntry>;

  constructor(
    private testFacade: TestFacade,
    private crafter: CrafterService
  ) { }

  ngOnInit() {
    this.createObs();
  }

  private createObs(): void {
    this.test$ = this.testFacade.byCategory$;
    this.result$ = this.testFacade.result$;
    this.entry$ = this.testFacade.entry$;
  }

  public checkResult(entry: TestEntry): void {
    this.testFacade.getResultByUid(entry.uid);
    this.crafter.dialog(TestResultComponent, {
      request$: this.result$,
      entry$: of(entry)
    }, 'test-result');
  }


}
