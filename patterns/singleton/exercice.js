class ScoreBoard {
  constructor() {
    this.score = 0;
  }
  addScore(number) {
    this.score += number;
  }
}

// Do not touch the code below
const scoreBoard = new ScoreBoard();
export { scoreBoard, ScoreBoard };
