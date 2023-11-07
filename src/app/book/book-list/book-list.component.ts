import {Component, OnInit} from '@angular/core';
import {Book} from "../../shared/model/book";
import {BookService} from "../../shared/services/book.service";
//import {DialogsComponent} from "../../shared/dialogs/dialogs.component";
//import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: Array<Book>;

  constructor(private bookService: BookService) {
    this.books = [];
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

