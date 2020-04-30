import { Component, Input } from '@angular/core';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})

export class PaginationComponent {

  @Input() id: string;
  @Input() margin: number;
  @Input() selector: string;
  @Input() border = true;

  constructor(private pagination: PaginationService) { }

  public changeFrom(id: string, page: number): void {
    this.pagination.setCurrentPage(id, page);
    this.scroll(this.selector);
    window.dispatchEvent(new Event('resize'));  // Sticky
  }

  private scroll(id: string): void {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

}
