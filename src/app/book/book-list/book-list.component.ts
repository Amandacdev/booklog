import {Component} from '@angular/core';
import {Book} from "../../shared/model/book";
import {BOOKS} from "../../shared/model/BOOKS";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent {
  title = 'Booklog';
  books: Book[] = BOOKS;
  book: Book = new Book("", "", "", '', 0);
  editorMode = false;

  renameTitle: string = '';
  renameAuthor: string = '';
  renameSynopsis: string = '';

  deleteBook(bookToDelete: Book): void {
    const indxBookToDelete: number = this.books.findIndex(Book => Book.title === bookToDelete.title);

    if (indxBookToDelete >= 0) {
      this.books.splice(indxBookToDelete, 1);
    }
  }

  editBook(bookToEdit: Book) {
    const indxBookToEddit: number = this.books.findIndex(Book => Book.title === bookToEdit.title);

    if (indxBookToEddit >= 0) {
      this.books[indxBookToEddit].title = this.renameTitle;
      this.books[indxBookToEddit].author = this.renameAuthor;
      this.books[indxBookToEddit].synopsis = this.renameSynopsis;
    }

  }
}

