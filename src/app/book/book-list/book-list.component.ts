import {Component, OnInit} from '@angular/core';
import {Book} from "../../shared/model/book";
import {BookService} from "../../shared/services/book.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogsComponent} from "../../shared/dialogs/dialogs.component";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: Array<Book>;

  //Control variables to allow the display or not of certain buttons (administrator or client)
  showButtons1 = true;    //buttons for customer: 'Sinopses' or 'Comprar'
  showButtons2 = false;   //buttons for administrator: 'Editar' or 'Remover'
  changeButtonText = 'Mudar para Modo Adm';

  constructor(private bookService: BookService, public dialog: MatDialog) {
    this.books = [];
  }

  changeDisplayOfButtons() {
    if (this.changeButtonText === 'Mudar para Modo Adm') {
        this.changeButtonText = 'Mudar para Modo Cliente';
        this.showButtons1 = false;
        this.showButtons2 = true;
    } else {
        this.changeButtonText = 'Mudar para Modo Adm';
        this.showButtons1 = true;
        this.showButtons2 = false;
    }


  }

  ngOnInit() {
    this.bookService.listar().subscribe(books => this.books = books);
  }

  deletar(book: Book): void {
    // A implementar
  }

  editar(book: Book): void {
    // A implementar
  }

  teste() {
    console.log(this.books)
  }

  //Function to display modal (dialog) that displays the synopsis
  openSynopsis(book: { synopsis: any; }): void {
    const dialogRef = this.dialog.open(DialogsComponent,
        {
      width: '550px',
      enterAnimationDuration:'500ms',
      exitAnimationDuration: '100ms',
      data: {synopsis: book.synopsis}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // books: Book[] = BOOKS;
  // book: Book = new Book("", "", "", '', 0);
  // editorMode = false;
  //
  // renameTitle: string = '';
  // renameAuthor: string = '';
  // renameSynopsis: string = '';
  //
  // deleteBook(bookToDelete: Book): void {
  //   const indxBookToDelete: number = this.books.findIndex(Book => Book.title === bookToDelete.title);
  //
  //   if (indxBookToDelete >= 0) {
  //     this.books.splice(indxBookToDelete, 1);
  //   }
  // }
  //
  // editBook(bookToEdit: Book) {
  //   const indxBookToEddit: number = this.books.findIndex(Book => Book.title === bookToEdit.title);
  //
  //   if (indxBookToEddit >= 0) {
  //     this.books[indxBookToEddit].title = this.renameTitle;
  //     this.books[indxBookToEddit].author = this.renameAuthor;
  //     this.books[indxBookToEddit].synopsis = this.renameSynopsis;
  //   }
  //
  // }


}

