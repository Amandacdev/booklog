import {Component, OnInit} from '@angular/core';
import {Book} from "../../shared/model/book";
import {BookService} from "../../shared/services/book.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogSynopsisComponent} from "../../shared/dialogs/dialog-synopsis/dialog-synopsis.component";
import {DialogEditComponent} from "../../shared/dialogs/dialog-edit/dialog-edit.component";


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

ngOnInit() {
    this.bookService.listar().subscribe(books => this.books = books);
}

  //Function to change button views - 'Administrador' or 'Cliente'
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



  remove(book: Book): void {
      this.bookService.remove(book).subscribe(
          resposta => {
              const indxBookRemove = this.books.findIndex(b => b.id === book.id);
              if(indxBookRemove > -1){
                  this.books.splice(indxBookRemove,1);
              }
          }
      );
  }



  //Function to display modal (dialog) that edit book's info
  openEditDialog(book: Book): void {
    const copy = {...book};
    const dialogRef = this.dialog.open(DialogEditComponent,
        {
          width: '950px',
          enterAnimationDuration:'500ms',
          exitAnimationDuration: '100ms',
          data: {book: copy}
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result instanceof Object) {
            book.title = result.title;
            book.author = result.author;
            book.synopsis = result.synopsis;
            book.price = result.price;
            book.image = result.image;
        }
    });
  }

  //Function to display modal (dialog) that displays the synopsis
  openSynopsis(book: { synopsis: any; }): void {
    const dialogRef = this.dialog.open(DialogSynopsisComponent,
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
}

