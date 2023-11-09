import {Component, Inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-synopsis',
  templateUrl: './dialog-synopsis.component.html',
  styleUrls: ['./dialog-synopsis.component.css']
})
export class DialogSynopsisComponent {
  constructor(
      public dialogRef: MatDialogRef<DialogSynopsisComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {synopsis: any}
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
