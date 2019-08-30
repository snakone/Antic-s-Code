import { Component, OnInit, Input, Renderer2 } from '@angular/core';
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
    this.subscribeToRoute();
  }

  private subscribeToRoute(): void {
    const route: string = this.route.snapshot.data.name;

    switch (route) {
      case 'Code':
        this.background = this.bgs.code;
        break;

      case 'Categories':
        this.background = this.bgs.categories;
        break;

      case 'Articles':
        this.background = this.bgs.articles;
        break;

      case 'Article':
        this.background = this.bgs.article;
        break;
    }
  }

}
