import { Component, OnInit } from '@angular/core';
import { MAIN_CATEGORIES } from '@app/shared/shared.data';

@Component({
  selector: 'app-category-grid',
  templateUrl: './category-grid.component.html',
  styleUrls: ['./category-grid.component.scss']
})

export class CategoryGridComponent implements OnInit {

  categories = MAIN_CATEGORIES;

  constructor() { }

  ngOnInit() { }

}
