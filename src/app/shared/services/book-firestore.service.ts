import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {Book} from '../model/book';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookFirestoreService {


  colecaoBooks: AngularFirestoreCollection<Book>;
  NOME_COLECAO = 'books';


  constructor(private afs: AngularFirestore) {
    this.colecaoBooks = afs.collection(this.NOME_COLECAO);
  }


  listar(): Observable<Book[]> {
    return this.colecaoBooks.valueChanges({idField: 'id'});
  }


  inserir(book: Book): Observable<object> {
    delete book.id;
    return from(this.colecaoBooks.add(Object.assign({}, book)));
  }


  remove(book: Book): Observable<void> {
    return from(this.colecaoBooks.doc(book.id).delete());
  }

  pesquisarPorId(id: string): Observable<Book> {
    return this.colecaoBooks.doc(id).get().pipe(map(document => new Book(document.id, document.data())));
  }

  atualizar(book: Book): Observable<void> {
    const id = book.id;
    delete book.id;
    return from(this.colecaoBooks.doc(id).update(Object.assign({}, book)));
  }
}