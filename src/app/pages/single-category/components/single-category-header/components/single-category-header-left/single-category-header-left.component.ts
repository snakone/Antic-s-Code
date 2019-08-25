import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-header-left',
  templateUrl: './single-category-header-left.component.html',
  styleUrls: ['./single-category-header-left.component.scss']
})

export class SingleCategoryHeaderLeftComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
