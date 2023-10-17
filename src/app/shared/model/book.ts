export class Book {

  constructor(private _title: string, private _author: string, private _synopsis: string) {
  }

  get title(): string {
    return this._title;
  }

  set title(newTitle: string) {
    this._title = newTitle;
  }

  get author(): string {
    return this._author;
  }

  set author(newAuthor: string) {
    this._author = newAuthor;
  }

  get synopsis(): string {
    return this._synopsis;
  }

  set synopsis(newSynopsis: string) {
    this._synopsis = newSynopsis;
  }
}
