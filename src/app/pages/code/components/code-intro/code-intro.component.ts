import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TAGS_ICON } from '@app/shared/shared.data';
import { MatSelectChange } from '@angular/material/select';
import { Code } from '@app/shared/interfaces/interfaces';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-code-intro',
  templateUrl: './code-intro.component.html',
  styleUrls: ['./code-intro.component.scss']
})

export class CodeIntroComponent implements OnInit {

  @Input() code: Code[];
  @Output() tag: EventEmitter<string> = new EventEmitter<string>();
  tags = TAGS_ICON;

  constructor(private pagination: PaginationService) { }

  ngOnInit() { }

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
    let total = 0;
    this.code.forEach((x: Code) => {
      if (x.tags.includes(tag)) { total++; }
    });
    return total;
  }

}
