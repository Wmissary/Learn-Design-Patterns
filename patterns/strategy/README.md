# 🎓 Strategy Design Pattern 🎓

The Strategy pattern allows you to define a family of algorithms, encapsulate each one, and make them interchangeable at runtime. It lets the algorithm vary independently from clients that use it.

## Problem 🤔

In software design, you often have different algorithms that can be used to solve a particular problem. You might need to switch between these algorithms depending on the situation. However, you don't want to have to hard-code all the different algorithms into your program. You also don't want to have to modify your code every time a new algorithm is added.

## Solution 💡

The Strategy pattern provides a solution to this problem by encapsulating each algorithm in a separate class. The client can then choose which algorithm to use at runtime. This allows the algorithm to vary independently from the client that uses it.
To implement the Strategy pattern, you need to create an interface or abstract base class that defines the common methods for all the algorithms. You then define a concrete class for each algorithm that implements the interface. Finally, you create a context class that stores a reference to the algorithm interface and delegates work to it.

## Pros 🎉

- Allows you to easily switch between different algorithms at runtime.
- Keeps algorithms independent from the client code that uses them.
- Provides a clear separation of concerns.

## Cons 😢

- Can result in increased complexity and reduced efficiency if used improperly.
- Requires the creation of additional classes.

## JavaScript Details 🤓

In JavaScript, you can implement the Strategy pattern using different strategies that are passed to a context.

### Class

```js
export class Strategy {
  method() {
    return "Strategy method";
  }
}

export class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  method() {
    return this.strategy.method();
  }
}
```

In this example, we have a Strategy class that defines a method. We also have a Context class that takes a strategy in its constructor and delegates work to it.

### Function

```js
export const strategy = () => "Strategy method";

export const context = (strategy) => strategy();
```

In this example, we have a strategy function that returns a string. We also have a context function that takes a strategy and calls it.

### Object

```js
export const strategy = {
  method() {
    return "Strategy method";
  },
};

export const context = (strategy) => strategy.method();
```

In this example, we have a strategy object that has a method. We also have a context function that takes a strategy and calls its method.

## Resources 📚

- [Refactoring guru](https://refactoring.guru/design-patterns/strategy)
- [Christopher Okhravi video](https://www.youtube.com/watch?v=v9ejT8FO-7I)

## Implementation example 🚀
