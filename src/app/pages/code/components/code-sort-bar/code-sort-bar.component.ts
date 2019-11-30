import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { PaginationService } from 'ngx-pagination';
import { Code } from '@app/shared/interfaces/interfaces';
import { TAGS_ICON } from '@app/shared/shared.data';

@Component({
  selector: 'app-code-sort-bar',
  templateUrl: './code-sort-bar.component.html',
  styleUrls: ['./code-sort-bar.component.scss']
})

export class CodeSortBarComponent implements OnInit {



  constructor() { }

  ngOnInit() { }



}
