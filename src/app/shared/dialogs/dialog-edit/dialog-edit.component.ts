import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BookService} from "../../services/book.service";
import {Book} from "../../model/book";
import {BookFirestoreService} from "../../services/book-firestore.service";

@Component({
    selector: 'app-dialog-edit',
    templateUrl: './dialog-edit.component.html',
    styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent {
    public originalTitle: string;

    constructor(
        public dialogRef: MatDialogRef<DialogEditComponent>,
        private bookService: BookFirestoreService,
        @Inject(MAT_DIALOG_DATA) public data: {book: Book}
    ) {
        this.originalTitle = data.book.title || '';
    }
    closeDialog(updatedBook?: Book): void {
        this.dialogRef.close(updatedBook);
    }

    edit(book: Book) {
        this.bookService.atualizar(book).subscribe();
        book.price = Number(book.price);
        this.closeDialog(book);
    }
}
