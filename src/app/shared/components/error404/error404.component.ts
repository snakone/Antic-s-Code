import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})

export class Error404Component implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe(params => {
        if (!params.error) { this.goHome(); }
      });
   }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
