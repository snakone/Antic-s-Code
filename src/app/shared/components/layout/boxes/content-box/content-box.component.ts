import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})

export class ContentBoxComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() { }

}
