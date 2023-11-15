import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BookService} from "../../services/book.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent {
  constructor(
      public dialogRef: MatDialogRef<DialogEditComponent>,
      private bookService: BookService,
      @Inject(MAT_DIALOG_DATA) public data: {book: Book}
  ) {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  edit(book: Book) {
    this.bookService.atualizar(book).subscribe(
        updatedBook => {
            console.log(updatedBook);
            book.title = updatedBook.title;
            book.image = updatedBook.image;
            book.author = updatedBook.author;
            book.synopsis = updatedBook.synopsis;
            book.price = updatedBook.price;
        }
    );
    this.closeDialog();
  }

}
