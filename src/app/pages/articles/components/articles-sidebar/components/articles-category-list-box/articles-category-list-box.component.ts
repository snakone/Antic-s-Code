import { Component } from '@angular/core';
import { MAIN_CATEGORIES } from '@shared/data/categories';

@Component({
  selector: 'app-articles-category-list-box',
  templateUrl: './articles-category-list-box.component.html',
  styleUrls: ['./articles-category-list-box.component.scss']
})

export class ArticlesCategoryListBoxComponent {

  categories = MAIN_CATEGORIES;

  constructor() { }
}
