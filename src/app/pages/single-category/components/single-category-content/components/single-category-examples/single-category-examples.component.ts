import { Component, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-examples',
  templateUrl: './single-category-examples.component.html',
  styleUrls: ['./single-category-examples.component.scss']
})

export class SingleCategoryExamplesComponent {

  @Input() category: Category;

  constructor() { }

}
