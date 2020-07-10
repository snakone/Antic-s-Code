import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-single-test',
  templateUrl: './single-test.component.html',
  styleUrls: ['./single-test.component.scss']
})

export class SingleTestComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTestByCategory();
  }

  getTestByCategory(): void {
    this.route.params
    .pipe(takeUntil(this.unsubscribe$))
     .subscribe(params => console.log(params.category));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
