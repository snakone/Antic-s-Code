import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Category } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-header-left',
  templateUrl: './single-category-header-left.component.html',
  styleUrls: ['./single-category-header-left.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SingleCategoryHeaderLeftComponent {

  @Input() category: Category;

  constructor() { }

}
