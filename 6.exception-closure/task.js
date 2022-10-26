function parseCount(number) {
    let answer = Number.parseInt(number);
    if (isNaN(answer)) {
        throw new Error("Невалидное значение");
    } else {
        return answer;
    }
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
        this.result = 0;

        if (((this.a + this.b) <= this.c) ||
            ((this.a + this.c) <= this.b) ||
            ((this.b + this.c) <= this.a)) {
            this.result = new Error("Треугольник с такими сторонами не существует");
            throw this.result;
        }
    }

    getPerimeter() {
        if (this.result === Error) {
            throw new Error("Ошибка! Треугольник не существует");
        } else {
            return this.a + this.b + this.c;
        }
    }

    getArea() {
        if (this.result === Error) {
            throw new Error("Ошибка! Треугольник не существует");
        } else {
            let semiPerimeter = this.getPerimeter() / 2;
            return Number.parseFloat(Math.sqrt((semiPerimeter *
                (semiPerimeter - this.a) *
                (semiPerimeter - this.b) *
                (semiPerimeter - this.c))).toFixed(3));
        }
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        let triangle = new Triangle(a, b, c);
        triangle.getArea();
        triangle.getPerimeter()
    }
}
