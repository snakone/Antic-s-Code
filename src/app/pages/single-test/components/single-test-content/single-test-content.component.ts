import { Component, OnInit} from '@angular/core';
import { TestFacade } from '@store/test/test.facade';
import { CrafterService } from '@core/services/crafter/crafter.service';
import { TestResultComponent } from '@layout/dialogs/test-result/test-result.component';
import { Test, TestEntry } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-single-test-content',
  templateUrl: './single-test-content.component.html',
  styleUrls: ['./single-test-content.component.scss']
})

export class SingleTestContentComponent implements OnInit {

  test$: Observable<Test>;

  constructor(
    private testFacade: TestFacade,
    private crafter: CrafterService
  ) { }

  ngOnInit() {
    this.test$ = this.testFacade.byCategory$;
  }

  public checkResult(entry: TestEntry): void {
    this.testFacade.getResultByUid(entry.uid);
    this.crafter.dialog(TestResultComponent, entry, 'test-result');
  }


}
