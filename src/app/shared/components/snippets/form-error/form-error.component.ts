import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})

export class FormErrorComponent {

  @Input() message: string;
  @Input() control: FormControl;
  @Input() validator: string;

  constructor() { }

}
