import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TestRequestResult, TestEntry, TestQuestion } from '@shared/interfaces/interfaces';
import { TestFacade } from '@core/ngrx/test/test.facade';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})

export class TestResultComponent implements OnInit, OnDestroy {

  @Input() request: TestRequestResult;
  @Input() entry: TestEntry;

  badQuestions: TestQuestion[];
  sentence: string;

  constructor(private testFacade: TestFacade) { }

  ngOnInit(): void {
    this.calcBadQuestions();
    this.sentence = this.makeSentence();
  }

  private calcBadQuestions(): void {
    this.badQuestions = this.entry.questions
                        .filter((q, i) => !this.request.result[i].same);
  }

  private makeSentence(): string {
    switch (this.request.correct) {
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

  ngOnDestroy() {
    this.testFacade.resetEntry();
  }

}
