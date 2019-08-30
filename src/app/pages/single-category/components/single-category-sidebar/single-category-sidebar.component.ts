import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-sidebar',
  templateUrl: './single-category-sidebar.component.html',
  styleUrls: ['./single-category-sidebar.component.scss']
})

export class SingleCategorySidebarComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
