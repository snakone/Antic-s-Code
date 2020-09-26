import { ChangeDetectionStrategy, Component } from '@angular/core';
import { POPULAR_CATEGORIES } from '@shared/data/categories';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderCategoryComponent {

  categories = POPULAR_CATEGORIES;

  constructor() { }

}
