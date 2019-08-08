import { Component, OnInit } from '@angular/core';
import { TAGS } from '@app/shared/shared.data';

@Component({
  selector: 'app-tab-box',
  templateUrl: './tab-box.component.html',
  styleUrls: ['./tab-box.component.scss']
})

export class TabBoxComponent implements OnInit {

  tags = TAGS;

  constructor() { }

  ngOnInit() { }

}
