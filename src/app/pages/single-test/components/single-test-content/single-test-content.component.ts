import { Component } from '@angular/core';
import { TestFacade } from '@store/test/test.facade';
import { Router, ActivatedRoute } from '@angular/router';
import { TestEntry } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-test-content',
  templateUrl: './single-test-content.component.html',
  styleUrls: ['./single-test-content.component.scss']
})

export class SingleTestContentComponent {

  test$ = this.testFacade.byCategory$;

  constructor(
    private testFacade: TestFacade,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public navigate(entry: TestEntry): void {
    this.testFacade.setEntry(entry);
    this.router.navigate(['./do'], { relativeTo: this.route });
  }

}
