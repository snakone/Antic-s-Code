import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestRequest, TestEntry, TestResult, TestResultDialog, TestUserResult } from '@shared/interfaces/interfaces';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TestResultComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TestResultDialog,
    public dialogRef: MatDialogRef<TestResultComponent>
  ) { }

  get combined$(): Observable<any> {
    return combineLatest([
      this.data.request$,
      this.data.entry$
    ]).pipe(map(([request, entry]) =>  !!request && !!entry ? {request, entry} : null));
  }

  public makeResult(test: TestRequest, entry: TestEntry): TestUserResult[] {
    console.log({test, entry});
    const result: TestUserResult[] = [];
    test.result.answer.forEach((a, i) => {
      if (!a) {
        result.push({
          question: entry.questions[i].question,
          wrong: entry.questions[i].answers.find(_ => _.key === test.request[i]).value,
          good: entry.questions[i].answers.find(_ => _.key === test.raw.result[i]).value
        });
      }
    });

    return result;
  }

  public makeSentence(test: TestResult): string {
    switch (test.result?.correct) {
      case 1: case 2: case 3:
        return 'BAD.SCORE';
      case 4:
        return 'ALMOST.THERE';
      case 5:
        return 'ALRIGHT.YOU.MADE';
      case 6: case 7:
        return 'GOOD.SCORE';
      case 8: case 9:
        return 'GREAT.SCORE';
      case 10:
        return 'PERFECT.SCORE';
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

}
