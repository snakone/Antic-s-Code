import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})

export class BottomSheetComponent implements OnInit {

  constructor(private sheetRef: MatBottomSheetRef<BottomSheetComponent>) { }

  ngOnInit() {
    setTimeout(() => {
      this.sheetRef.dismiss();
    }, 3000);
  }

}
