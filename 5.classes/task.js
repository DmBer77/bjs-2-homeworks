"use strict";

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(level) {
        if (level >= 0) {
            if (level > 100) {
                this._state = 100;
            } else this._state = level;
        } else {
            this._state = 0;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective"
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        book = new Book();
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result;
        for (let i = 0; i < this.books.length; i++) {

            if (this.books[i][type] === value) {
                result = this.books[i];
            }
            result = null
        }
    }
    //
    // giveBookByName(bookName) {
    //     let issuedBooks = [];
    //
    //     for (let i = 0; i < this.books.length; i++) {
    //         if (this.books.name === bookName) {
    //             issuedBooks.push(this.books[i]);
    //             this.books.splice(i, 1);
    //         }
    //         if (issuedBooks.name === bookName) {
    //             this.books.push(issuedBooks[i]);
    //             issuedBooks.splice(i, 1);
    //         } else {
    //             return null
    //         }
    //     }
    // }


//Императивный подход
//     findBookBy(type, value){
//         let findBook = null;
//         for ( let i = 0; i < this.books.length; i++ ){
//             if (this.books[i][type] === value){
//                 findBook = this.books[i]
//             }
//         }
//         return findBook;
//     }

//Декларативный додход, после рефактоинга
//     findBookBy(type, value) {
//         let findBook = this.books.find((findBook) => findBook[type] === value);
//         return findBook || null;
//     }

//Императивный подход
    giveBookByName(bookName){
        let giveBook = null;
        for ( let i = 0; i < this.books.length; i++ ) {
            if (this.books[i].name === bookName) {
                giveBook = this.books[i];
                this.books.splice(i, 1);
            }
        }
        return giveBook;
    }

//После рефактоинга, используем собственный метод
//     giveBookByName(bookName) {
//         const giveBook = this.findBookBy("name", bookName);
//         const index = this.books.indexOf(giveBook);
//         if (index !== -1) {
//             this.books.splice(index, 1);
//             return giveBook;
//         }
//         return null;
//     }

}

//    ---------------------------------------------------------------

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.status = 'valid';
        this.marks = [];
    }

    exclude(reason) {
        delete this.marks;
        this.status = 'excluded by ' + reason;
    }

    addMark(mark, subjectName) {
        if (mark <= 5) {
            let subjectGrade = new SubjectGrade(mark, subjectName);
            if (this.marks === undefined) {
                this.marks = [subjectGrade];
            } else {
                this.marks.push(subjectGrade);
            }
        } console.log( "Ошибка, оценка должна быть числом от 1 до 5");
    }

    getAverage() {
        let result = 0;
        for (let i = 0; i < this.marks.length; i += 1) {
            result += this.marks[i].mark;
        }
        return result / this.marks.length
    }

    getAverageBySubject(subjectName) {
        let result = 0;
        let filteredArray = this.marks.filter(function (marks) {
            return marks.subject === subjectName;
        });
        for (let i = 0; i < filteredArray.length; i += 1) {
            result += filteredArray[i].mark;
        }
        return result / filteredArray.length
    }
}

class SubjectGrade {
    constructor(mark, subject) {
        this.mark = mark;
        this.subject = subject;
    }
}

