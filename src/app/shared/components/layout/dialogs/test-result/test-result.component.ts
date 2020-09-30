import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestResult, TestResultDialog } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TestResultComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: TestResultDialog,
    public dialogRef: MatDialogRef<TestResultComponent>
  ) { }

  ngOnInit(): void {
  }

  public makeSentence(test: TestResult): string {
    switch (test.result.correct) {
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

}
