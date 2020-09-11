import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchFacade } from '@store/search/search.facade';
import { MAIN_CATEGORIES } from '@shared/data/categories';

@Component({
  selector: 'app-navbar-search',
  templateUrl: './navbar-search.component.html',
  styleUrls: ['./navbar-search.component.scss']
})

export class NavBarSearchComponent {

  focused = false;
  categories = MAIN_CATEGORIES;
  value: string;

  constructor(
    private searchFacade: SearchFacade,
    private router: Router
  ) { }

  public focusOut(): void {
    this.focused = false;
    if (!this.value) { return; }
    this.searchFacade.search({value: this.value});
    this.router.navigateByUrl('/search');
  }

}
