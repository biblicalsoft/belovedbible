import { Component } from '@angular/core';
import { IBibleBook, IBibleChapter } from './bible.interface';
import { BibleService } from './bible.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage {
  private booksMeta = [];

  private selectedBookNumber: number = 1;
  private selectedChapterNumber: number = 1;

  private selectedBook: IBibleBook = { name: null, title: null, chapters: [] };
  private selectedChapter: IBibleChapter = { number: 1, verses: [] };

  constructor(private bibleService: BibleService) {
    this.booksMeta = bibleService.getBooksMeta();

    this.selectBook(this.selectedBookNumber);
  }

  selectBook(bookNumber: number) {
    this.bibleService.getBook(bookNumber)
      .then((book: IBibleBook) => {
        this.selectedBook = book;
        this.selectedChapterNumber = 1;
        
        this.selectChapter(this.selectedBookNumber, this.selectedChapterNumber);
      });
  }

  selectChapter(bookNumber: number, chapterNumber: number) {
    this.bibleService.getChapter(bookNumber, chapterNumber)
      .then((chapter: IBibleChapter) => this.selectedChapter = chapter);
  }

  selectNextChapter() {
    if (this.selectedChapterNumber < this.selectedBook.chapters.length) {
      this.selectedChapterNumber += 1;
      this.selectChapter(this.selectedBookNumber, this.selectedChapterNumber);
    }
  }

  selectPrevChapter() {
    if (this.selectedChapterNumber > 1) {
      this.selectedChapterNumber -= 1;
      this.selectChapter(this.selectedBookNumber, this.selectedChapterNumber);
    }
  }

  markVerse(verse) {
    // TODO: Move the logic to bibleService and Save mark into the storage
    // this.bibleService.mark(this.selectedBook, this.selectedChapter, verse.number);
    this.selectedChapter.verses.forEach((chapter) => chapter.marked = false);
    verse.marked = !verse.marked
  }
}
