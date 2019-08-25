import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-content',
  templateUrl: './single-category-content.component.html',
  styleUrls: ['./single-category-content.component.scss']
})

export class SingleCategoryContentComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
