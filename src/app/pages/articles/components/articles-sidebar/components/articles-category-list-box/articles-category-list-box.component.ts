import { Component, OnInit } from '@angular/core';
import { MAIN_CATEGORIES } from '@app/shared/shared.data';

@Component({
  selector: 'app-articles-category-list-box',
  templateUrl: './articles-category-list-box.component.html',
  styleUrls: ['./articles-category-list-box.component.scss']
})

export class ArticlesCategoryListBoxComponent implements OnInit {

  categories = MAIN_CATEGORIES;

  constructor() { }

  ngOnInit() { }

}
