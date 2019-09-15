import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Code } from '@app/shared/interfaces/interfaces';
import { PaginationService } from 'ngx-pagination';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-code-content',
  templateUrl: './code-content.component.html',
  styleUrls: ['./code-content.component.scss']
})

export class CodeContentComponent implements OnInit, OnDestroy {

  @Input() code: Code[];
  private unsubscribe$ = new Subject<void>();
  page = 1;
  itemsPerPage = 10;

  constructor(private pagination: PaginationService) { }

  ngOnInit() {
    this.getCurrentPage();
  }

  private getCurrentPage(): void {
    this.pagination.change
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: string) => {
        if (res) {
          this.page = this.pagination.getCurrentPage(res);
       }
     });
  }

  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.page - 1) + indexOnPage;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
