import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '@app/shared/shared.data';

@Component({
  selector: 'app-articles-category-list-box',
  templateUrl: './articles-category-list-box.component.html',
  styleUrls: ['./articles-category-list-box.component.scss']
})

export class ArticlesCategoryListBoxComponent implements OnInit {

  categories = CATEGORIES;

  constructor() { }

  ngOnInit() { }

  sortByCategory(category: string): void {
    console.log(category);
  }

}
