import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { TestFacade } from '@store/test/test.facade';
import { Test, TestEntry } from '@shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-category-test-box',
  templateUrl: './category-test-box.component.html',
  styleUrls: ['./category-test-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CategoryTestBoxComponent implements OnInit {

  tests$: Observable<Test[]>;

  constructor(
    private testFacade: TestFacade,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tests$ = this.testFacade.tests$
     .pipe(map(res => res.filter(t => !!t.entries)));
  }

  public navigate(e: TestEntry): void {
    if (e.done) { return; }
    this.router.navigateByUrl('/test/' + e.category + '/' + e.uid);
  }

}
