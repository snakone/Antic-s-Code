import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.scss']
})

export class DisqusComponent implements OnInit {

  @Input() identifier: string;

  constructor() { }

  ngOnInit() { }

}
