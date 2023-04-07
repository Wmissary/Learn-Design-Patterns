# Chapter 1: Singleton 🎓

In this chapter, we will learn about the Singleton pattern. We will use this pattern to create a class that will manage the game state.

## 🤨 What is the Singleton Pattern?

The Singleton pattern is a creational design pattern that ensures that only one instance of a class exists and provides a global point of access to that instance.

## Problem 🤔

In software design, it is sometimes desirable to have only a single instance of a class that can be accessed globally. The Singleton pattern provides a solution to this problem by allowing you to create a single instance of a class that can be accessed throughout your program.

## Solution 💡

To implement the Singleton pattern, you need to create a class with a private constructor and a static method that ensures only one instance of the class is created. The first time the method is called, it creates a new instance of the class and returns it. Subsequent calls return the same instance.

## Pros 🎉

- Ensures that only one instance of a class exists.
- Provides a global point of access to that instance.

## Cons 😢

- Violates the Single Responsibility Principle.
- Requires special treatment in a multithreaded environment.
- May be difficult to unit test clients of the Singleton.
- May be a bad idea if you are not 100% sure that you need it.

## JavaScript Details 🤓

In JavaScript, you can implement the Singleton pattern using an object literal, a module, or a class with a static method.

### Object literal

```js
export const singleton = {
  name: "Singleton",
  method() {
    return "Singleton method";
  },
};
```

In this example, singleton is a simple object literal that has a property called someProperty and a method called method. This object literal can be accessed throughout your program, and there will only ever be one instance of it.

### Module

```js
export const singleton = (function () {
  let instance;

  function createInstance() {
    return {
      name: "Singleton",
      method() {
        return "Singleton method";
      },
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();
```

In this example, Singleton is a module that uses a closure to keep the instance variable private. The init function is used to create the actual instance of the singleton, and the getInstance method is used to retrieve that instance. This module can also be accessed throughout your program, and there will only ever be one instance of it.

### Class with static getInstance method

```js
export class Singleton {
  static #instance;

  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }
    return Singleton.#instance;
  }

  metthod() {
    return "Singleton method";
  }
}
```

In this example, Singleton is a class with a private static property called #instance, and a static method called getInstance that is used to retrieve the singleton instance. This class can also be accessed throughout your program, and there will only ever be one instance of it.

### Class with constructor

```js
export class Singleton {
  static #instance;
  constructor() {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }
    Singleton.#instance = this;
  }

  method() {
    return "Singleton method";
  }
}
```

In this example, Singleton is a class that uses a static property called instance to keep track of the singleton instance. The constructor checks if the instance property is set, and if it is, it returns the instance. If the instance property is not set, it sets it to the current instance and returns it. This class can also be accessed throughout your program, and there will only ever be one instance of it.

## Additional Information 📖

The Singleton pattern requires special attention in a multi-threaded environment because it can lead to race conditions, where multiple threads try to create their own instances of the Singleton simultaneously.

## More Resources 📚

- [Refactoring guru](https://refactoring.guru/design-patterns/singleton)
- [Christopher Okhravi video](https://www.youtube.com/watch?v=hUE_j6q0LTQ)

## Implementation 🚀

Now that you know what the Singleton pattern is, let's implement it in our game.

We will need to create a new class called `Game` that will be responsible for managing the game state. This class will be a Singleton, so we will need to implement the Singleton pattern.

### Create the Game class

Create a new file called `Game.js` in the `src` folder and add the following code:

```js
export default class Game {
  static #instance;
  constructor() {
    if (Game.#instance) {
      return Game.#instance;
    }
    Game.#instance = this;
  }
}
```

Pretty simple, right? We are using a static property called `#instance` to keep track of the singleton instance. The constructor checks if the `#instance` property is set, and if it is, it returns the instance. If the `#instance` property is not set, it sets it to the current instance and returns it.

### Create the Game instance

Now that we have the `Game` class, we need to create an instance of it. Create a new file called `index.js` in the `src` folder and add the following code:

```js
import Game from "./Game.js";

const game = new Game();
```
