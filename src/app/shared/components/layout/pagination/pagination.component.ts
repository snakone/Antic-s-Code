import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})

export class PaginationComponent implements OnInit {

  @Input() id: string;

  constructor(private pagination: PaginationService) { }

  ngOnInit() { }

  changeFrom(id: string, page: number): void {
    this.pagination.setCurrentPage(id, page);
    window.dispatchEvent(new Event('resize'));
  }

}
