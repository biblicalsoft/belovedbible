export interface IBibleVerse {
    number: number,
    text: string
}

export interface IBibleChapter {
    number: number,
    verses: Array<IBibleVerse>
}

export interface IBibleBook {
    name: string,
    title: string,
    chapters: Array<IBibleChapter>
}