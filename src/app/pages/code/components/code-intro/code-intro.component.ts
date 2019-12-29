import { Component, Output, Input, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { PaginationService } from 'ngx-pagination';
import { TAGS_ICON } from '@app/shared/shared.data';
import { Code } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-code-intro',
  templateUrl: './code-intro.component.html',
  styleUrls: ['./code-intro.component.scss']
})

export class CodeIntroComponent {

  @Input() code: Code[];
  @Output() tag: EventEmitter<string> = new EventEmitter<string>();
  tags = TAGS_ICON;

  constructor(private pagination: PaginationService) { }

  filter(tag: MatSelectChange): void {
    this.tag.emit(tag.value);
    this.pagination.setCurrentPage('code-pagination', 1);
    this.scroll('code-section');
  }

  scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

  getSum(tag: string): number {
    if (tag === 'Todas') { return; }
    let total = 0;
    this.code.forEach((x: Code) => {
      if (x.tags.includes(tag)) { total++; }
    });
    return total;
  }

}
