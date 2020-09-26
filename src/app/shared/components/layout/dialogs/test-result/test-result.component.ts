import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestResult } from '@app/shared/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})

export class TestResultComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public result$: Observable<TestResult>,
    public dialogRef: MatDialogRef<TestResultComponent>
  ) { }

  ngOnInit(): void {
  }

}
