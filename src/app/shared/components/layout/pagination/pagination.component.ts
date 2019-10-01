import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})

export class PaginationComponent implements OnInit {

  @Input() id: string;
  @Input() margin: number;
  @Input() selector: string;

  constructor(private pagination: PaginationService) { }

  ngOnInit() { }

  changeFrom(id: string, page: number): void {
    this.pagination.setCurrentPage(id, page);
    this.scroll(this.selector);
    window.dispatchEvent(new Event('resize'));  // Sticky
  }

  private scroll(id: string): void {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

}
