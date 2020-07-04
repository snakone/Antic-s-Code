import { Component } from '@angular/core';
import { CATEGORY_INDEX } from '@shared/data/categories';

@Component({
  selector: 'app-single-category-index-box',
  templateUrl: './single-category-index-box.component.html',
  styleUrls: ['./single-category-index-box.component.scss']
})

export class SingleCategoryIndexBoxComponent {

  index = CATEGORY_INDEX;

  constructor() { }

  scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

}
