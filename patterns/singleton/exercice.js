class ScoreBoard {
  constructor() {
    this.score = 0;
  }
  addScore(number) {
    this.score += number;
  }
  getScore() {
    return this.score;
  }
}

const scoreBoard = new ScoreBoard();

// Do not touch the code below

export { scoreBoard, ScoreBoard };
