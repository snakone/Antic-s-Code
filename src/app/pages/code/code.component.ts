import { Component, OnInit, OnDestroy } from '@angular/core';
import { Code } from '@app/shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '@app/app.config';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromCode from '@core/ngrx/selectors/code.selectors';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})

export class CodeComponent implements OnInit, OnDestroy {

  code: Code[] = [];
  filtered: Code[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.getCode();
  }

  getCode(): void {
    this.store.select(fromCode.getAllCode)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: Code[]) => {
        this.code = res;
        this.filtered = this.code;
    });
  }

  filter(tag: string): void {
    if (tag === 'Todas') {
      this.filtered = this.code;
      return;
    }
    this.filtered = this.code.filter((x: Code) => {
      if (x.tags.includes(tag)) { return x; }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
