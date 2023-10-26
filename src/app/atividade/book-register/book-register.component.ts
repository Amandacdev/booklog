import { Component, OnInit } from '@angular/core';
import {Book} from "../../shared/model/book";
import {BOOKS} from "../../shared/model/BOOKS";


@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent {

  title = 'Booklog';
  books: Book[] = BOOKS;
  bookToRegister: Book;
  editorMode = false;

  constructor() {
    this.bookToRegister = new Book('','','')
  }

  insertBook(): void {
    this.books.push(this.bookToRegister);
    this.bookToRegister = new Book('','','')
  }

  //protected readonly BOOKS = BOOKS;
}
