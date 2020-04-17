import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-disqus',
  templateUrl: './disqus.component.html',
  styleUrls: ['./disqus.component.scss']
})

export class DisqusComponent {

  @Input() identifier: string;

  constructor() { }

}
