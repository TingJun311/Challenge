
// Version 1
function fizzBizz (value) {
    let newArray = [];

    for (i = 0; i < value; i++) {
        let current = i + 1;
        if (current % 3 === 0) {
            newArray.push("Fizz")
            i++;
        }
        if (current % 5 === 0) {
            newArray.push("Bizz");
            i++
        }
        if (current % 3 == 0 && current % 5 == 0) {
            newArray.push("FizzBizz");
            i++
        }
        newArray.push(i + 1);
    }
    return newArray;
}

const array = fizzBizz(100);
console.log(fizzBizz(100));



// Version 3
