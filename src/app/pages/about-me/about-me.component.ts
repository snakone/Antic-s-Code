import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})

export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  scroll(box: string): void {
    const el = document.getElementById(box);
    if (el) { el.scrollIntoView({ behavior: 'auto', block: 'start' }); }
  }

}
