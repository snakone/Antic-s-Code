import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CATEGORIES, CODE_TAGS } from '@app/shared/shared.data';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})

export class HeaderSearchComponent implements OnInit {

  searchForm: FormGroup;
  categories = CATEGORIES;
  tags = CODE_TAGS;

  constructor() { }

  ngOnInit() {
    this.createSearchForm();
  }

  private createSearchForm(): void {
    this.searchForm = new FormGroup({
       title: new FormControl(null, []),
    category: new FormControl(null, []),
    tag: new FormControl(null, [])
    });
  }

  onSubmit(): void {
    if (this.searchForm.invalid) { return; }
    console.log(this.searchForm.value);
  }

}
