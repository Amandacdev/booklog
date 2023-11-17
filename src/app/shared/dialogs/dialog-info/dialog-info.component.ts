import {Component, Inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.css']
})
export class DialogInfoComponent {
  constructor(
      public dialogRef: MatDialogRef<DialogInfoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { text: string;
                            title: string}
  ) { }

closeDialog(): void {
    this.dialogRef.close();
  }
}
