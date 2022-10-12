function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let arrayOfMarks = [];

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        arrayOfMarks[0] = mark;
    } else {
        arrayOfMarks.push(mark);
        }
    this.marks = arrayOfMarks;
}

Student.prototype.addMarks = function (...mark) {
    arrayOfMarks = [];
    this.marks = arrayOfMarks.concat(...mark);
}

Student.prototype.getAverage = function () {
    let sum = this.marks.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    return sum / this.marks.length
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

