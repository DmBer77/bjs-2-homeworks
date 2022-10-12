function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
        }
}

Student.prototype.addMarks = function (...mark) {
    this.marks = [];
    this.marks.push(...mark);
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

