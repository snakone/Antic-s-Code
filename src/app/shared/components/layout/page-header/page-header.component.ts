import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PAGE_BG } from '@app/shared/shared.data';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  background: string;
  bgs = PAGE_BG;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.background = this.getRoute();
  }

  private getRoute(): string {
    const route: string = this.route.snapshot.data.name;

    switch (route) {
      case 'Code': return this.bgs.code;
      case 'Categories': return this.bgs.categories;
      case 'Articles': return this.bgs.articles;
      case 'Article': return this.bgs.article;
      case 'Profile': return this.bgs.profile;
      case 'Admin': return this.bgs.admin;
      case 'Public Profile': return this.bgs.public;
      case 'Search': return this.bgs.search;
      default: return '';
    }
  }

}
