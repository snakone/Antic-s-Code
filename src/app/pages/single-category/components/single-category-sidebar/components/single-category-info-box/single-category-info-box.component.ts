import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-info-box',
  templateUrl: './single-category-info-box.component.html',
  styleUrls: ['./single-category-info-box.component.scss']
})

export class SingleCategoryInfoBoxComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
