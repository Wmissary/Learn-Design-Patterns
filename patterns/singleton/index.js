export default class ShoppingCart {
  static #instance = null;

  static getInstance() {
    if (!ShoppingCart.#instance) {
      ShoppingCart.#instance = new ShoppingCart();
    }

    return ShoppingCart.#instance;
  }

  items = [];

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter((i) => i !== item);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
