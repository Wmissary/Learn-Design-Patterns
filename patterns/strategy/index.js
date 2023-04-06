export class MovementStrategy {
  move() {
    throw new Error("Not implemented");
  }
}

export class WalkingStrategy extends MovementStrategy {
  move() {
    console.log("Walking");
  }
}

export class RunningStrategy extends MovementStrategy {
  move() {
    console.log("Running");
  }
}

export class Character {
  constructor(movementStrategy) {
    this.movementStrategy = movementStrategy;
  }

  move() {
    this.movementStrategy.move();
  }
}
