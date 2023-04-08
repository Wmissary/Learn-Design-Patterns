import { describe, it } from "node:test";
import assert from "node:assert";

import Game from "../src/Game.js";

describe("Game class", () => {
  it("Should be a singleton", () => {
    const cart1 = new Game();
    const cart2 = new Game();
    assert.strictEqual(cart1, cart2);
  });
});
