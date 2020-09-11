import { Component, OnDestroy } from '@angular/core';
import { TestFacade } from '@core/ngrx/test/test.facade';

@Component({
  selector: 'app-do-single-test',
  templateUrl: './do-single-test.component.html',
  styleUrls: ['./do-single-test.component.scss']
})

export class DoSingleTestComponent {

  entry$ = this.testFacade.entry$;
  result$ = this.testFacade.result$;

  constructor(private testFacade: TestFacade) { }

}
