import { Component, OnInit } from '@angular/core';
import { TAGS } from '@app/shared/shared.data';

@Component({
  selector: 'app-tag-box',
  templateUrl: './tag-box.component.html',
  styleUrls: ['./tag-box.component.scss']
})

export class TagBoxComponent implements OnInit {

  tags = TAGS;

  constructor() { }

  ngOnInit() { }

}
