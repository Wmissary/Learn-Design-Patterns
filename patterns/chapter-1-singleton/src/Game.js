export default class Game {
  static #instance;
  constructor() {
    if (Game.#instance) {
      return Game.#instance;
    }
    Game.#instance = this;
  }
}
