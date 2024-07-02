import { Component } from '@angular/core';
import { IBibleBook, IBibleChapter, IBibleVerse } from './bible.interface';

import { BibleService } from './bible.service';

@Component({
  selector: 'app-bible',
  templateUrl: 'bible.page.html',
  styleUrls: ['bible.page.scss']
})
export class BiblePage {
  booksMeta: { number: number, title: string }[] = [];

  selectedBookNumber: number = 1;
  selectedChapterNumber: number = 1;

  selectedBook: IBibleBook = { name: '', title: '', chapters: [] };
  selectedChapter: IBibleChapter = { number: 1, verses: [] };

  constructor(private bibleService: BibleService) {
    this.booksMeta = bibleService.getBooksMeta();
    this.selectBook(this.selectedBookNumber);
  }

  async selectBook(bookNumber: number, chapterNumber: number = 1) {
    try {
      const book = await this.bibleService.getBook(bookNumber);
      this.selectedBook = book;
      this.selectedChapterNumber = chapterNumber;
      this.selectChapter(bookNumber, chapterNumber);
    } catch (err) {
      console.error('Error selecting book:', err);
    }
  }

  async selectChapter(bookNumber: number, chapterNumber: number) {
    try {
      const chapter = await this.bibleService.getChapter(bookNumber, chapterNumber);
      if (chapter) {
        this.selectedChapter = chapter;
      } else {
        console.warn(`Chapter ${chapterNumber} not found in book ${bookNumber}`);
      }
    } catch (err) {
      console.error('Error selecting chapter:', err);
    }
  }

  selectNextChapter() {
    if (this.selectedChapterNumber < this.selectedBook.chapters.length) {
      this.selectedChapterNumber += 1;
    } else {
      if (this.selectedBookNumber < this.booksMeta.length) {
        this.selectedBookNumber += 1;
        this.selectBook(this.selectedBookNumber);
      }
    }
    this.selectChapter(this.selectedBookNumber, this.selectedChapterNumber);
  }

  selectPrevChapter() {
    if (this.selectedChapterNumber > 1) {
      this.selectedChapterNumber -= 1;
    } else {
      if (this.selectedBookNumber > 1) {
        this.selectedBookNumber -= 1;
        this.selectBook(this.selectedBookNumber);
      }
    }
    this.selectChapter(this.selectedBookNumber, this.selectedChapterNumber);
  }

  markVerse(verseToToggle: IBibleVerse) {
    // TODO: Move the logic to bibleService and Save mark into the storage
    // this.bibleService.mark(this.selectedBook, this.selectedChapter, verse.number);
    this.selectedChapter.verses.forEach((verse) => {
      if (verse.number !== verseToToggle.number) {
        verse.marked = false;
      }
    });

    verseToToggle.marked = !verseToToggle.marked;
  }
}
