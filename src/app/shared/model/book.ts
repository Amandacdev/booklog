export class Book {

  public id?: string;
  public title?: string;
  public author?: string;
  public synopsis?: string;
  public image?: string;
  public price?: number;

  constructor(id?: string, book: Book = {}) {
    this.id = id;
    this.title = book.title;
    this.author = book.author;
    this.synopsis = book.synopsis;
    this.image = book.image;
    this.price = book.price;
  }
}