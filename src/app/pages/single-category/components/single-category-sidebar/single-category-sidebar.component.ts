import { Component, Input } from '@angular/core';
import { Category } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-sidebar',
  templateUrl: './single-category-sidebar.component.html',
  styleUrls: ['./single-category-sidebar.component.scss']
})

export class SingleCategorySidebarComponent {

  @Input() category: Category;

  constructor() { }

}
