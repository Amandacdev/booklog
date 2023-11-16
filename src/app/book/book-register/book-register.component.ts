import {Component, OnInit} from '@angular/core';
import {Book} from "../../shared/model/book";
import {BookService} from "../../shared/services/book.service";
import {DialogSynopsisComponent} from "../../shared/dialogs/dialog-synopsis/dialog-synopsis.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})

export class BookRegisterComponent implements OnInit {
  book: Book;
  booksAmount: number;
  // editorMode = false;

  constructor(private bookService: BookService, , public dialog: MatDialog) {
    this.book = new Book('','','','', '', 0);
    this.booksAmount = 0;
  }

  ngOnInit() {
    this.bookService.listar().subscribe(books => this.booksAmount = books.length);
  }

  insertBook(): void {
    this.bookService.inserir(this.book).subscribe(book => console.log(book));
    this.bookService.listar().subscribe(books => this.booksAmount = books.length);

    const dialogRef = this.dialog.open(DialogSynopsisComponent,
        {
          width: '550px',
          enterAnimationDuration:'500ms',
          exitAnimationDuration: '100ms',
          data: {text: "Cadastrado com sucesso!"}
        });

    dialogRef.afterClosed().subscribe();

    window.alert("Livro Registrado");
  }
    
    this.book = new Book('','','','', '', 0);
  }
}
