import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestFacade } from '@store/test/test.facade';

import {
  TestResult,
  TestEntry,
  TestUserResult
} from '@shared/interfaces/interfaces';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TestResultComponent implements OnInit, OnDestroy {

  result$: Observable<TestResult>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public entry: TestEntry,
    private testFacade: TestFacade,
    public dialogRef: MatDialogRef<TestResultComponent>
  ) { }

  ngOnInit() {
    this.result$ = this.testFacade.result$;
  }

  public makeResult(
    request: TestResult
  ): TestUserResult[] {
    const result: TestUserResult[] = [];
    request.result.answer.forEach((a: boolean, i) => {
      if (!a) { // Wrong Answer
        result.push({
          question: this.entry.questions[i].question,
          wrong: this.entry.questions[i].answers
                 .find(_ => _.key === request.request[i]).value,
          good: this.entry.questions[i].answers
                 .find(_ => _.key === request.raw.result[i]).value
        });
      }
    });
    return result;
  }

  public makeSentence(test: TestResult): string {
    switch (test.result?.correct) {
      case 1: case 2: case 3: return 'BAD.SCORE';
      case 4: return 'ALMOST.THERE';
      case 5: return 'ALRIGHT.YOU.MADE';
      case 6: case 7: return 'GOOD.SCORE';
      case 8: case 9: return 'GREAT.SCORE';
      case 10: return 'PERFECT.SCORE';
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.testFacade.resetResult();
  }

}
