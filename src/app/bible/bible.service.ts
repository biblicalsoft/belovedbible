import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IBibleBook, IBibleChapter } from './bible.interface';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  private readonly booksBasePath: string = '../../assets/data/books';
  private books: Array<IBibleBook> = [];

  constructor(private http: HttpClient) { }

  /**
   * Get a given book by provided book number
   * @name getBook
   * @param bookNumber The number of book to get
   */
  getBook(bookNumber: number) {
    if (this.books[bookNumber]) {
      return Promise.resolve(this.books[bookNumber]);
    } else {
      return this.fetchBook(bookNumber)
        .toPromise()
        .then((book: IBibleBook) => {
          this.books[bookNumber] = book;

          return book;
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }

  /**
   * Get book given chapter
   * @name getChapter
   * @param bookNumber The number of the selected book
   * @param chapterNumber The number of the chapter to get
   */
  getChapter(bookNumber: number, chapterNumber: number) {
    return this.getBook(bookNumber)
      .then((book: IBibleBook) => {
        return book.chapters.find((chapter: IBibleChapter) => chapter.number === chapterNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  mark(bookNumber: number, chapterNumber: number, verseNumber: number) {
    // TODO: Save mark into the storage
  }

  /**
   * Returns available books meta info, like title, number etc.
   * @name getBooksMeta
   */
  getBooksMeta() {
    return [
      { number: 1, title: 'Битие' },
      { number: 2, title: 'Изход' },
      { number: 3, title: 'Левит' },
      { number: 4, title: 'Числа' },
      { number: 5, title: 'Второзаконие' },
      { number: 6, title: 'Исус Навин' },
      { number: 7, title: 'Съдии' },
      { number: 8, title: 'Рут' },
      { number: 9, title: '1 Царе' },
      { number: 10, title: '2 Царе' },
      { number: 11, title: '3 Царе' },
      { number: 12, title: '4 Царе' },
      { number: 13, title: '1 Летописи' },
      { number: 14, title: '2 Летописи' },
      { number: 15, title: 'Ездра' },
      { number: 16, title: 'Неемия' },
      { number: 17, title: 'Естир' },
      { number: 18, title: 'Йов' },
      { number: 19, title: 'Псалми' },
      { number: 20, title: 'Притчи' },
      { number: 21, title: 'Еклесиаст' },
      { number: 22, title: 'Песен на песните' },
      { number: 23, title: 'Исая' },
      { number: 24, title: 'Еремия' },
      { number: 25, title: 'Плачът на Еремия' },
      { number: 26, title: 'Езекиил' },
      { number: 27, title: 'Даниил' },
      { number: 28, title: 'Осия' },
      { number: 29, title: 'Йоил' },
      { number: 30, title: 'Амос' },
      { number: 31, title: 'Авдий' },
      { number: 32, title: 'Йон' },
      { number: 33, title: 'Михей' },
      { number: 34, title: 'Наум' },
      { number: 35, title: 'Авакум' },
      { number: 36, title: 'Софония' },
      { number: 37, title: 'Агей' },
      { number: 38, title: 'Захария' },
      { number: 39, title: 'Малахия' },
      { number: 40, title: 'Матей' },
      { number: 41, title: 'Марк' },
      { number: 42, title: 'Лука' },
      { number: 43, title: 'Йоан' },
      { number: 44, title: 'Деяния' },
      { number: 45, title: 'Яков' },
      { number: 46, title: '1 Петрово' },
      { number: 47, title: '2 Петрово' },
      { number: 48, title: '1 Йоаново' },
      { number: 49, title: '2 Йоаново' },
      { number: 50, title: '3 Йоаново' },
      { number: 51, title: 'Юда' },
      { number: 52, title: 'Римляни' },
      { number: 53, title: '1 Коринтияни' },
      { number: 54, title: '2 Коринтияни' },
      { number: 55, title: 'Галатяни' },
      { number: 56, title: 'Ефесяни' },
      { number: 57, title: 'Филипяни' },
      { number: 58, title: 'Колосяни' },
      { number: 59, title: '1 Солунци' },
      { number: 60, title: '2 Солунци' },
      { number: 61, title: '1 Тимотей' },
      { number: 62, title: '2 Тимотей' },
      { number: 63, title: 'Тит' },
      { number: 64, title: 'Филимон' },
      { number: 65, title: 'Евреи' },
      { number: 66, title: 'Откровение' }
    ];
  }

  private fetchBook(bookNumber: number) {
    const bookEndpoint = `${this.booksBasePath}/${bookNumber}.json`;

    return this.http.get(bookEndpoint);
  }
}
