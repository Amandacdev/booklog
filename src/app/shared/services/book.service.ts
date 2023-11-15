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

  remove(book: Book): Observable<any> {
    return this.httpClient.delete(`${this.urlBooks}/${book.id}`);
  }

  atualizar(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.urlBooks}/${book.id}`, book);
  }

  pesquisarPorId(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.urlBooks}/${id}`);
  }

  pesquisarPorAutor(author: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.urlBooks}?author=${author}`);
  }
}