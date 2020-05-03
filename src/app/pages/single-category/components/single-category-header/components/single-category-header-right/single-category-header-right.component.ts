import { Component, Input } from '@angular/core';
import { Category } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-header-right',
  templateUrl: './single-category-header-right.component.html',
  styleUrls: ['./single-category-header-right.component.scss']
})

export class SingleCategoryHeaderRightComponent {

  @Input() category: Category;

  constructor() { }

}
