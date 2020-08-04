import { Component} from '@angular/core';
import { TestFacade } from '@store/test/test.facade';

@Component({
  selector: 'app-single-test-content',
  templateUrl: './single-test-content.component.html',
  styleUrls: ['./single-test-content.component.scss']
})

export class SingleTestContentComponent {

  test$ = this.testFacade.byCategory$;
  entriesByUser$ = this.testFacade.entriesByUser$;

  constructor(private testFacade: TestFacade) { }


}
