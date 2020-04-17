import { Component, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-intro',
  templateUrl: './single-category-intro.component.html',
  styleUrls: ['./single-category-intro.component.scss']
})

export class SingleCategoryIntroComponent {

  @Input() category: Category;

  constructor() { }

}
