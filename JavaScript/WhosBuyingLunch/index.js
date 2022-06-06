
function whosPaying(names) {
    let rand = Math.random();
    let num = Math.floor((rand *= names.length));
    return `${names[num]} is going to buy lunch today!`;
}

