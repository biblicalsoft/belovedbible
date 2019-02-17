import { Component } from '@angular/core';
import { IBibleBook, IBibleChapter, IBibleVerse } from './bible.interface';
import { BibleService } from './bible.service';

@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage {
  booksMeta = [];

  selectedBookNumber: number = 1;
  selectedChapterNumber: number = 1;

  selectedBook: IBibleBook = { name: null, title: null, chapters: [] };
  selectedChapter: IBibleChapter = { number: 1, verses: [] };

  constructor(private bibleService: BibleService) {
    this.booksMeta = bibleService.getBooksMeta();

    this.selectBook(this.selectedBookNumber);
  }

  selectBook(bookNumber: number, chapterNumber: number = 1) {
    this.bibleService.getBook(bookNumber)
      .then((book: IBibleBook) => {
        this.selectedBook = book;
        this.selectedChapterNumber = chapterNumber;
        
        this.selectChapter(bookNumber, chapterNumber);
      });
  }

  selectChapter(bookNumber: number, chapterNumber: number) {
    this.bibleService.getChapter(bookNumber, chapterNumber)
      .then((chapter: IBibleChapter) => this.selectedChapter = chapter);
  }

  selectNextChapter() {
    if (this.selectedChapterNumber < this.selectedBook.chapters.length) {
      this.selectedChapterNumber += 1;
    } else {
      if (this.selectedBookNumber < this.booksMeta.length) {
        this.selectedBookNumber += 1;
      }
    }
  }

  selectPrevChapter() {
    if (this.selectedChapterNumber > 1) {
      this.selectedChapterNumber -= 1;
    } else {
      if (this.selectedBookNumber > 1) {
        this.selectedBookNumber -= 1;
      }
    }
  }

  markVerse(verseToToggle: IBibleVerse) {
    // TODO: Move the logic to bibleService and Save mark into the storage
    // this.bibleService.mark(this.selectedBook, this.selectedChapter, verse.number);
    this.selectedChapter.verses.forEach((verse) => {
      if (verse.number != verseToToggle.number) {
        verse.marked = false
      }
    });
    
    verseToToggle.marked = !verseToToggle.marked
  }
}
