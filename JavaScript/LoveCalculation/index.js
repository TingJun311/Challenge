
prompt("Your name: ");
prompt("Your lover name:")

function randomPercent () {
    let rand = Math.random();
    return Math.floor((rand *= 100) + 1);
}

const result = randomPercent();

alert ((result >= 85)? `You have ${result} % love points, perfect match!` : `You have ${result} % love points`);

