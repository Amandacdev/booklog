import {Component, OnInit} from '@angular/core';
import {Book} from "../../shared/model/book";
import {BookService} from "../../shared/services/book.service";
import {DialogInfoComponent} from "../../shared/dialogs/dialog-info/dialog-info.component";
import {MatDialog} from "@angular/material/dialog";
import {BookFirestoreService} from "../../shared/services/book-firestore.service";

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})

export class BookRegisterComponent implements OnInit {
  book: Book;
  booksAmount: number;

  constructor(private bookService: BookFirestoreService, public dialog: MatDialog) {
      this.book = new Book('', {
          title: '',
          author: '',
          synopsis: '',
          image: '',
          price: 0
      });

      this.booksAmount = 0;
  }

  ngOnInit() {
    this.bookService.listar().subscribe(books => this.booksAmount = books.length);
  }

  insertBook(): void {
    this.bookService.inserir(this.book).subscribe(book => console.log(book));
    this.bookService.listar().subscribe(books => this.booksAmount = books.length);

      this.book = new Book('', {
          title: '',
          author: '',
          synopsis: '',
          image: '',
          price: 0
      });

    const dialogRef = this.dialog.open(DialogInfoComponent,
        {
          width: '550px',
          enterAnimationDuration:'500ms',
          exitAnimationDuration: '100ms',
          data: {title: 'Livro cadastrado com sucesso!',
                text: ""}
        });

    dialogRef.afterClosed().subscribe();
  }
}
