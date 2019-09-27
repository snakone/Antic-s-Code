import { Component, OnInit, Input } from '@angular/core';
import { Link } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-links-box',
  templateUrl: './links-box.component.html',
  styleUrls: ['./links-box.component.scss']
})

export class LinksBoxComponent implements OnInit {

  @Input() links: Link[];

  constructor() { }

  ngOnInit() { }

}
