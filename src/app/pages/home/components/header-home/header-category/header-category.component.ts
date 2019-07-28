import { Component, OnInit } from '@angular/core';
import { POPULAR_CATEGORIES } from '@app/shared/shared.data';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss']
})

export class HeaderCategoryComponent implements OnInit {

  categories = POPULAR_CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}
