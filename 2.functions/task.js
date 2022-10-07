// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;
    min = arr[0];
    max = arr[arr.length - 1];
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }

        sum = sum + arr[i];
    }
    avg = Number((sum / arr.length).toFixed(2))

    return {min: min, max: max, avg: avg};
}

// Задание 2
function makeWork(arrOfArr, func) {

    let max = 0;
    let elementOfArray = 0;

    for (let i = 0; i < arrOfArr.length; i++) {
        elementOfArray = func(arrOfArr[i]);
        if (elementOfArray >= max) {
            max = elementOfArray;
        }
    }
    return max;
}

function worker(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

// Задание 3
function worker2(arr) {
    let max = arr[0];
    let min = arr[arr.length - 1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return Math.abs(max - min);
}
