function parseCount(number) {
    let answer = Number.parseInt(number);
    if (isNaN(answer)) {
        throw new Error("Невалидное значение");
    }
    return answer;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (((a + b) <= c) ||
            ((a + c) <= b) ||
            ((b + c) <= a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let semiPerimeter = this.getPerimeter() / 2;
        return Number.parseFloat(Math.sqrt((semiPerimeter *
            (semiPerimeter - this.a) *
            (semiPerimeter - this.b) *
            (semiPerimeter - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    let triangle = {};
    try {
        triangle = new Triangle(a, b, c);
    } catch (error) {
        triangle.getPerimeter = function () {
            return "Ошибка! Треугольник не существует"
        };
        triangle.getArea = function () {
            return "Ошибка! Треугольник не существует"
        }
    }
    return triangle;
}
