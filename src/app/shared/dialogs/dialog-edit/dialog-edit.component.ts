import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent {
  constructor(
      public dialogRef: MatDialogRef<DialogEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {title: string, author: string, synopsis: string, image: string, price: number}
  ) {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
