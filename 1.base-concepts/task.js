"use strict"

function solveEquation(a, b, c) {
    let arr
    arr = [];

    let dis = (b ** 2) - (4 * a * c);

    if (dis === 0) {
        let element1 = -b / (2 * a);
        arr.push(element1);
    }
    if (dis > 0) {
        let element1 = (-b + Math.sqrt(dis)) / (2 * a);
        let element2 = (-b - Math.sqrt(dis)) / (2 * a);
        arr.push(element1);
        arr.push(element2);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    // percent = Number(percent);
    // contribution = Number(contribution);
    // amount = Number(amount);

    if (typeof (percent) !== "number") {
        return "Параметр \"Процентная ставка\" содержит неправильное значение \"test\"";
    }
    if (typeof (contribution) !== "number") {
        return "Параметр \"Начальный взнос\" содержит неправильное значение \"test\"";
    }
    if (typeof (amount) !== "number") {
        return "Параметр \"Общая стоимость\" содержит неправильное значение \"test\"";
    }

    let creditBody = amount - contribution;
    let dateFinish = date;
    let dateStart = new Date();

    let monthsOfCredit = (dateFinish.getMonth() - dateStart.getMonth() + (12 * (dateFinish.getFullYear() - dateStart.getFullYear())));
    let percentagePerMonth = percent / 12 / 100;
    let monthPayment = Number(creditBody * (percentagePerMonth + (percentagePerMonth / (((1 + percentagePerMonth) ** monthsOfCredit) - 1))));

    totalAmount = Number((monthPayment * monthsOfCredit).toFixed(2));

    console.log(totalAmount);

    return totalAmount;
}
