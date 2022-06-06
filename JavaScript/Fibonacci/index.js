

// My answers
function fibonacciGenerator (n) {
    let result = [];

    if (n === 0 || n === 1) {
        result.push(0);
    } else if (n === 2) {
        result.push(0);
        result.push(1);
    } else {
        result.push(0);
        result.push(1);
        for (var i = 0; i < n; i++) {
            if (i > 1) {
                let temp = result[i - 1] + result[i - 2];
                result.push(temp);
            }
        }
    }
    return result;
} 
console.log(fibonacciGenerator(10));