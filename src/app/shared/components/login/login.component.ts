import { Component, Inject, Optional, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements AfterViewInit {

  isReg = false;
  isCon = false;
  conditions = false;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.data.register) { this.isReg = true; }
    }, 100);
  }
}
