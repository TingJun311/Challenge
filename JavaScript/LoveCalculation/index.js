
prompt("Your name: ");
prompt("Your lover name:")

function randomPercent () {
    let rand = Math.random();
    return Math.floor((rand *= 100) + 1);
}

alert (`${randomPercent()} %`);