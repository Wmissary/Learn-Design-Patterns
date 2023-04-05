import assert from "node:assert";

import { scoreBoard, ScoreBoard } from "./exercice.js";

const validate = () => {
  try {
    const otherPlaceScoreBoard = new ScoreBoard();
    assert.strictEqual(scoreBoard, otherPlaceScoreBoard);
    console.log("🎉🎉🎉 This is a singleton!");
  } catch (error) {
    console.error("❌❌❌ This is not a singleton!");
  }
};

validate();
