import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-content',
  templateUrl: './single-category-content.component.html',
  styleUrls: ['./single-category-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleCategoryContentComponent {

  @Input() category: Category;

  constructor() { }

}
