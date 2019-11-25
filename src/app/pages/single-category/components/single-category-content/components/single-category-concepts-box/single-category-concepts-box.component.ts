import { Component, OnInit, Input } from '@angular/core';
import { Category } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-single-category-concepts-box',
  templateUrl: './single-category-concepts-box.component.html',
  styleUrls: ['./single-category-concepts-box.component.scss']
})

export class SingleCategoryConceptsBoxComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit() { }

}
