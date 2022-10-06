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
function makeWork(arrOfArr, worker2) {

    let arrOfArrMod = [];

    for (let i = 0; i < arrOfArr.length; i++) {
        arrOfArrMod.push(worker2(arrOfArr[i]));
    }
    let max = arrOfArrMod[0];

    for (let i = 0; i < arrOfArrMod.length; i++) {
        if (arrOfArrMod[i] >= max) {
            max = arrOfArrMod[i];
        }
    }
    return max;
}

function worker(arr) {
    let sum;
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

// Задание 3
function worker2(arr) {
    let max = arr[0];
    let min = arr[arr.length - 1];
    let delta;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        delta = Math.abs(max - min);
    }
    return delta;
}
