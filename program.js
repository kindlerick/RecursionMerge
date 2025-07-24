function itterativeFibonacci(number) {

    let array = [];

    if(number === 0) {
        return array;
    } else if (number === 1) {
        array.push(0);
        return array;
    }

    array = [0, 1];

    for (let i = 2; i <= number; i++) {
        array.push(array[i - 1] + array[i - 2]);
    }

    return array;
}

function recursiveFibonacci(number) {

    let array = [];

    if (number === 0) {
        return 0;
    }
    if (number === 1) { 
        return 1;
    } else {
        return recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
    }
}

console.log("Recursive Fibonacci " + recursiveFibonacci(7));

console.log("Itterative Fibonacci " + itterativeFibonacci(7));


const array = [3, 2, 1, 13, 8, 5, 0, 1]; 


function mergeSort(array){

    let newArray = [];



    return newArray;
}