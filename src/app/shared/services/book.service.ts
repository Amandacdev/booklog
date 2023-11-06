import { Injectable } from '@angular/core';
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BookService {
  urlBooks: string;

  constructor(private httpClient: HttpClient) {
    this.urlBooks = "http://localhost:3000/books";
  }

  listar(): Observable<Array<Book>> {
    return this.httpClient.get<Array<Book>>(this.urlBooks);
  }

  inserir(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.urlBooks, book);
  }

  deletar(book: Book) {
    // A implementar
  }

  atualizar(book: Book) {
    // A implementar
  }
}
