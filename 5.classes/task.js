class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name
		this.releaseDate = releaseDate
		this.pagesCount = pagesCount
		this.state = 100
		this.type = null
	}

	fix() {
		this.state *= 1.5
	}

	set state(secondState) {
		if (secondState < 0) {
			this._state = 0
		} else if (secondState > 100) {
			this._state = 100
		} else {
			this._state = secondState
		}
	}
	get state() {
		return this._state
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = "magazine"
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
        this.type = "book"
		this.author = author
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "novel"
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "fantastic"
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = "detective"
	}
}

class Library {
	constructor(name) {
		this.name = name
		this.books = []
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book)
		}
	}
	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i]
			}
		}
		return null;
	}
	giveBookByName(bookName) {
		let search = this.findBookBy("name", bookName)
		let searchIndex = this.books.indexOf(search)
		if (searchIndex === -1) {
			return null
		} else {
			return this.books.splice(searchIndex, 1)[0]
		}
	}
}

// class Student{
//     constructor(name, gender, age) {
// 	this.name = name
// 	this.gender = gender
// 	this.age = age
// 	this.marks = {}
//     }

//     addMarks(subjectName, mark ){
//         if (this.marks.includes(subjectName)){
//             if (mark >= 2 || mark <= 5){
//                 this.marks.push(mark, subjectName)
//             } else {
//                 return
//             }
//         } else {
//             this.marks.push(subjectName);
//             if (mark >= 2 || mark <= 5){
//                 this.marks.push(mark, subjectName)
//             } else {
//                 return
//             }
//             }
//     }

//     getAverageBySubject(){
//         if (!this.marks.includes(subjectName)){
//             return 0
//             } else {
//                 return this.marks.reduce((marks, item) => marks + item / this.marks.length, 0)
//             }
//     }
// }


// Student.prototype.addMarks = function(...marks) {
// 		if (this.marks) {
// 				this.marks.push(...marks)
// 			}
// 		}

// 		Student.prototype.getAverage = function() {
// 			if (!this.marks || this.marks.length === 0) {
// 				return 0
// 			} else {
// 				return this.marks.reduce((marks, item) => marks + item / this.marks.length, 0)
// 			}
// 		}

// 		Student.prototype.exclude = function(reason) {
// 			  this.excluded = reason
// 				delete this.subject
// 				delete this.marks
// 		}