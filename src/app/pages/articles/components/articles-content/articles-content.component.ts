import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Article } from '@app/shared/interfaces/interfaces';
import { PaginationService } from 'ngx-pagination';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-articles-content',
  templateUrl: './articles-content.component.html',
  styleUrls: ['./articles-content.component.scss']
})

export class ArticlesContentComponent implements OnInit, OnDestroy {

  @Input() articles: Article[];
  private unsubscribe$ = new Subject<void>();
  page = 1;

  constructor(private pagination: PaginationService) { }

  ngOnInit() {
    this.getCurrentPage();
   }

  getCurrentPage(): void {
    this.pagination.change
     .pipe(takeUntil(this.unsubscribe$))
     .subscribe((res: string) => {
        if (res) {
          this.page = this.pagination.getCurrentPage(res);
       }
     });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
