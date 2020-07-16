import { Component, OnDestroy } from '@angular/core';
import { TestFacade } from '@core/ngrx/test/test.facade';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-do-single-test',
  templateUrl: './do-single-test.component.html',
  styleUrls: ['./do-single-test.component.scss']
})

export class DoSingleTestComponent implements OnDestroy {

  entry$ = this.testFacade.entry$.pipe(tap(res => console.log(res)));
  result$ = this.testFacade.result$;

  constructor(private testFacade: TestFacade) { }

  ngOnDestroy() {
    this.testFacade.resetEntry();
  }

}
