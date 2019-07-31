import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-home-input',
  templateUrl: './contact-home-input.component.html',
  styleUrls: ['./contact-home-input.component.scss']
})

export class ContactHomeInputComponent implements OnInit {

  email = '';

  constructor() { }

  ngOnInit() { }

  onSubmit(): void {
    console.log(this.email);
  }

}
