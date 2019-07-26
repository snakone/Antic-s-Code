import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '@app/shared/shared.data';

@Component({
  selector: 'app-header-category',
  templateUrl: './header-category.component.html',
  styleUrls: ['./header-category.component.scss']
})

export class HeaderCategoryComponent implements OnInit {

  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

}
