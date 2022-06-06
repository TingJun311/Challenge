/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main() {
  oddBeeper();
  moveBoard();
  moveBoard();
}
function moveBoard() {
  turnLeft();
  move();
  turnLeft();
  move();
  evenBeeper();
  turnRight();
  move();
  turnRight();
  oddBeeper();
}

function evenBeeper() {
  beeper();
  putBeeper();
  move();
}

function oddBeeper() {
  beeper();
  beeper();
  putBeeper();
}

function beeper() {
  putBeeper();
  move();
  move();
}
