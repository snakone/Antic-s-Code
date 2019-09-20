import { Component, OnInit, Input } from '@angular/core';
import { List } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-links-box',
  templateUrl: './links-box.component.html',
  styleUrls: ['./links-box.component.scss']
})

export class LinksBoxComponent implements OnInit {

  @Input() links: List[];

  constructor() { }

  ngOnInit() { }

}
