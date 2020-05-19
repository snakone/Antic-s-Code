import { Component, Input } from '@angular/core';
import { Link } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-links-box',
  templateUrl: './links-box.component.html',
  styleUrls: ['./links-box.component.scss']
})

export class LinksBoxComponent {

  @Input() links: Link[];

  constructor() { }

}
