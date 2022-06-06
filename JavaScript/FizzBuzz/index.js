
// Version 1
function fizzBuzz (value) {
    let newArray = [];

    for (i = 0; i < value; i++) {
        let current = i + 1;

        if (current % 3 === 0 && current % 5 === 0) {
            newArray.push("FizzBuzz");
        } else if (current % 3 === 0) {
            newArray.push("Fizz")
        } else if (current % 5 === 0) {
            newArray.push("Buzz");
        } else {
            newArray.push(current);
        }
    }
    return newArray;
}

const array = fizzBuzz(100);
console.log(array);



// Version 2

let array2 = [];
let count = 1;

function fizzBizzManual() {
    if (count % 3 === 0 && count % 5 === 0 ) {
        array2.push("FizzBuzz");
    } else if (count % 3 === 0 ) {
        array2.push("Fizz");
    } else if (count % 5 === 0) {
        array2.push("Buzz");
    } else {
        array2.push(count);
    }
    count++;
    console.log(array2);
}
