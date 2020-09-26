import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TestResult, TestQuestion } from '@shared/interfaces/interfaces';
import { TestFacade } from '@store/test/test.facade';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})

export class TestResultComponent implements OnInit, OnDestroy {

  @Input() entry: TestResult;

  badQuestions: TestQuestion[];
  sentence: string;

  constructor(private testFacade: TestFacade) { }

  ngOnInit(): void {
    this.calcBadQuestions();
    this.sentence = this.makeSentence();
  }

  private calcBadQuestions(): void {
    this.badQuestions = this.entry.questions
                        .filter((_, i) => !this.entry.request[i]);
  }

  private makeSentence(): string {
    switch (this.entry.result.correct) {
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
