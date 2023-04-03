import { describe, it } from "node:test";
import assert from "node:assert";

import { ShoppingCart, shoppingCart2, shoppingCart3 } from "../index.js";

describe("Singleton first solution", () => {
  it("should be the same instance", () => {
    const cart1 = new ShoppingCart();
    const cart2 = new ShoppingCart();
    assert.strictEqual(cart2, cart1);
  });

  it("should have the same items", () => {
    const cart1 = new ShoppingCart();
    const cart2 = new ShoppingCart();
    cart1.addItem({ name: "foo", price: 10 });
    cart2.addItem({ name: "bar", price: 20 });
    assert.deepStrictEqual(cart2.getItems(), cart1.getItems());
  });

  it("should have the same total", () => {
    const cart1 = new ShoppingCart();
    const cart2 = new ShoppingCart();
    cart1.addItem({ name: "foo", price: 10 });
    cart2.addItem({ name: "bar", price: 20 });
    assert.strictEqual(cart2.getTotal(), cart1.getTotal());
  });

  it("should have the same total after removing an item", () => {
    const cart1 = new ShoppingCart();
    const cart2 = new ShoppingCart();
    cart1.addItem({ name: "foo", price: 10 });
    cart2.addItem({ name: "bar", price: 20 });
    cart1.removeItem({ name: "foo", price: 10 });
    cart2.removeItem({ name: "bar", price: 20 });
    assert.strictEqual(cart2.getTotal(), cart1.getTotal());
  });
});

describe("Singleton second solution", () => {
  it("should be the same instance", () => {
    assert.strictEqual(shoppingCart2, shoppingCart2);
  });

  it("should have the same items", () => {
    shoppingCart2.addItem({ name: "foo", price: 10 });
    shoppingCart2.addItem({ name: "bar", price: 20 });
    assert.deepStrictEqual(shoppingCart2.getItems(), shoppingCart2.getItems());
  });

  it("should have the same total", () => {
    shoppingCart2.addItem({ name: "foo", price: 10 });
    shoppingCart2.addItem({ name: "bar", price: 20 });
    assert.strictEqual(shoppingCart2.getTotal(), shoppingCart2.getTotal());
  });

  it("should have the same total after removing an item", () => {
    shoppingCart2.addItem({ name: "foo", price: 10 });
    shoppingCart2.addItem({ name: "bar", price: 20 });
    shoppingCart2.removeItem({ name: "foo", price: 10 });
    shoppingCart2.removeItem({ name: "bar", price: 20 });
    assert.strictEqual(shoppingCart2.getTotal(), shoppingCart2.getTotal());
  });
});

describe("Singleton third solution", () => {
  it("should be the same instance", () => {
    assert.strictEqual(shoppingCart3, shoppingCart3);
  });

  it("should have the same items", () => {
    shoppingCart3.addItem({ name: "foo", price: 10 });
    shoppingCart3.addItem({ name: "bar", price: 20 });
    assert.deepStrictEqual(shoppingCart3.getItems(), shoppingCart3.getItems());
  });

  it("should have the same total", () => {
    shoppingCart3.addItem({ name: "foo", price: 10 });
    shoppingCart3.addItem({ name: "bar", price: 20 });
    assert.strictEqual(shoppingCart3.getTotal(), shoppingCart3.getTotal());
  });

  it("should have the same total after removing an item", () => {
    shoppingCart3.addItem({ name: "foo", price: 10 });
    shoppingCart3.addItem({ name: "bar", price: 20 });
    shoppingCart3.removeItem({ name: "foo", price: 10 });
    shoppingCart3.removeItem({ name: "bar", price: 20 });
    assert.strictEqual(shoppingCart3.getTotal(), shoppingCart3.getTotal());
  });
});
