export class Book {

  constructor(private _title: string, private _author: string, private _synopsis: string,
              private _image: string, private _price: number) {
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

  get image(): string {
    return this._image;
  }

  set image(newImage: string) {
    this._image = newImage;
  }

  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    this._price = newPrice;
  }
}
