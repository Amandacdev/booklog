import {Component, Inject} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent {
  constructor(
      public dialogRef: MatDialogRef<DialogsComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {synopsis: any}
  ) { }

  close(): void {
    this.dialogRef.close();
  }
}
