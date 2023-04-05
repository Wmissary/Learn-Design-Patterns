import { describe, it } from "node:test";
import assert from "node:assert";

import ShopingCart from "../index.js";

describe("ShopingCart", () => {
  const shirt = { name: "T-shirt", price: 10 };
  const pants = { name: "Pants", price: 20 };

  it("Should be a singleton", () => {
    const cart1 = ShopingCart.getInstance();
    const cart2 = ShopingCart.getInstance();
    assert.strictEqual(cart1, cart2);
  });

  it("Should add items", () => {
    const cart = ShopingCart.getInstance();
    cart.addItem(shirt);
    cart.addItem(pants);
    assert.deepStrictEqual(cart.getItems(), [shirt, pants]);
  });

  it("Should remove items", () => {
    const cart = ShopingCart.getInstance();
    cart.removeItem(shirt);
    assert.deepStrictEqual(cart.getItems(), [pants]);
  });

  it("Should get total", () => {
    const cart = ShopingCart.getInstance();
    cart.addItem(shirt);
    assert.strictEqual(cart.getTotal(), 30);
  });
});
